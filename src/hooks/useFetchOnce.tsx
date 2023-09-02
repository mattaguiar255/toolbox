import { useRef, useState } from "react";

function useFetchOnce<T = any>(url: string, options?: Object): T | null {

  const [data, setData] = useState<T | null>(null);
  const fetchTriggered = useRef<boolean>(false);

  if (fetchTriggered.current === false) {

    fetchTriggered.current = true;

    fetch(url, options).then((response) => {
      response.json().then((data) => setData(data));
    });

  }

  return data;

}

export default useFetchOnce;