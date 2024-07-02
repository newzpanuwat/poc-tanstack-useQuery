import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import "./App.css";

function App() {
  const { isPending, error, data, isFetching } = useQuery({
    queryKey: ["repoData"],
    queryFn: () => axios.get("https://api.github.com/repos/tannerlinsley/react-query").then((res) => res.data),
  });

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <>
      <div>
        <h1>{data.full_name}</h1>
        <p>{data.description}</p>
        <strong>👀 {data.subscribers_count}</strong> <strong>✨ {data.stargazers_count}</strong>{" "}
        <strong>🍴 {data.forks_count}</strong>
        <div>{isFetching ? "Updating..." : ""}</div>
      </div>
    </>
  );
}

export default App;
