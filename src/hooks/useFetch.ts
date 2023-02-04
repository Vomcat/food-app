import { useCallback, useState } from "react";

const useFetch = () => {
  const [error, setError] = useState<string | null>(null);

  const sendRequest = useCallback(async (requestConfig: any) => {
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
    } catch (err: any) {
      setError(err.message);
    }
  }, []);

  return {
    error,
    sendRequest,
  };
};
export default useFetch;
