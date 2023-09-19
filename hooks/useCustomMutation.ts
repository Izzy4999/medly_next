import { useQueryClient, useMutation } from "@tanstack/react-query";

export function useCustomMutation(func: any, key: any) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: func,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: key ? [key] : [] });
      // return data;
    },
    onError: (error) => {
      // return error;
    },
  });
}
