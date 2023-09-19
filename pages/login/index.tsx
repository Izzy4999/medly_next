"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { FacebookIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { BsGoogle } from "react-icons/bs";
import * as z from "zod";
import Cookie from "js-cookie";

import Link from "next/link";
import { redirect } from "next/navigation";

export default function Login() {
  const formSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6).max(8),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { toast } = useToast();

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    toast({
      title: "submitted",
      description: "Details submitted",
    });
    console.log(values);
  };

  const session = Cookie.get("session")
  

  return (
    <div className="h-full flex flex-row justify-center p-8">
      <Card className="md:w-96">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">Create an account</CardTitle>
          <CardDescription>Login with the following</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid md:grid-cols-2  gap-6">
            <Link
              href={`${process.env.API_URL}/auth/facebook`}
              className="py-2 flex items-center justify-center rounded-sm border border-input bg-background hover:bg-accent hover:text-accent-foreground"
            >
              <FacebookIcon className="mr-2 h-4 w-4" />
              Facebook
            </Link>

            <Link
              href={`${process.env.API_URL}/auth/google`}
              className="flex items-center justify-center rounded-sm border border-input bg-background hover:bg-accent hover:text-accent-foreground"
            >
              <BsGoogle className="mr-2 h-4 w-4" />
              Google
            </Link>
          </div>{" "}
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-background px-2 text-muted-foreground">
                    Or continue with
                  </span>
                </div>
              </div>
              <div className="grid">
                <div className="md:grid-cols-4">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="@email" {...field} />
                        </FormControl>
                        <FormDescription></FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="md:grid-cols-4">
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                          <Input placeholder="password" {...field} />
                        </FormControl>
                        <FormDescription></FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              <Button type="submit">Login</Button>
            </form>
          </Form>
        </CardContent>
        <CardFooter></CardFooter>
      </Card>
    </div>
  );
}
