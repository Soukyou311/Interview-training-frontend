import { useEffect, useState } from "react";

const useFetchRandomQA = (refresh: boolean) => {
  // 明确指定 refresh 的类型为 boolean
  const [question, setQuestion] = useState<string>(""); // 指定 question 的类型
  const [answer, setAnswer] = useState<string>(""); // 指定 answer 的类型
  const [loading, setLoading] = useState<boolean>(true); // 指定 loading 的类型
  const [error, setError] = useState<Error | null>(null); // 指定 error 的类型

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch("http://192.168.1.103:3111/api/qa/random");
        if (!response.ok) {
          throw new Error("网络请求失败");
        }
        const data = await response.json();
        setQuestion(data.data[0].question);
        setAnswer(data.data[0].answer);
      } catch (err) {
        setError(err instanceof Error ? err : new Error("未知错误")); // 确保错误是 Error 类型
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [refresh]); // 依赖 refresh，变化时重新请求数据

  return { question, answer, loading, error };
};

export default useFetchRandomQA;
