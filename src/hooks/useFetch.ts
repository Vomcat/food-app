import { useCallback, useState } from "react";
import { OrderItemProps } from "interfaces/Order";

interface sendRequestProps {
  url: string;
  method?: string;
  headers?: {};
  body?: OrderItemProps | null;
}

const useFetch = () => {
  const [error, setError] = useState<string | null>(null);

  const sendRequest = useCallback(async (requestConfig: sendRequestProps) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_HOST}/${requestConfig.url}`,
        {
          method: "POST",
          headers: requestConfig.headers ? requestConfig.headers : {},
          body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
        }
      );

      if (!response.ok) {
        throw new Error("Request failed!");
      }
    } catch (err: unknown) {
      if (err instanceof Error) {
        return setError(err.message);
      }
    }
  }, []);

  return {
    error,
    sendRequest,
  };
};
export default useFetch;
