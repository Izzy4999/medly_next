import { useQuery } from "@tanstack/react-query";

const useCustomQuery = (isMethod: any, params: any | string, keys: string) => {
  return useQuery({
    queryKey: [keys, params],
    queryFn: params || params === "" ? () => isMethod(params) : isMethod,
  });
};

export default useCustomQuery;
