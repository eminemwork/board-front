import { useState, useEffect } from "react";

export default function useGetPostAll() {
  const [posts, setPosts] = useState();

  useEffect(() => {
    try {
      fetch("http://localhost:8080/post")
        .then((res) => res.json())
        .then((data) => setPosts(data));
    } catch (e) {
      console.log(e);
    }
  }, []);

  return posts;
}
