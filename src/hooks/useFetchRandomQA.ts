// hooks/useFetchRandomQA.ts
import { useEffect, useState } from "react";

interface QA {
  _id: string;
  question: string;
  answer: string;
  tags: string[];
}

function useFetchRandomQA() {
  const [data, setData] = useState<QA | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://192.168.1.103:3111/api/qa/random");
        if (!response.ok) {
          throw new Error("网络错误");
        }
        const json = await response.json();
        setData(json.data[0]); // 假设只取第一个问题
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return {
    question: data?.question || "",
    answer: data?.answer || "",
    loading,
    error,
  };
}

export default useFetchRandomQA;
