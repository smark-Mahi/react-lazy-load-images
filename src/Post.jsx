import { getPostApi } from "./api/api";
import SinglePost from "./SinglePost";
import { useQuery } from "@tanstack/react-query";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Post = () => {
  const img =
    "https://images.unsplash.com/photo-1505968409348-bd000797c92e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60";
  const { data, error } = useQuery({
    queryKey: ["getdata"],
    queryFn: getPostApi,
  });
  console.log(data);
  return (
    <>
      {error ? (
        <p>error</p>
      ) : !data ? (
        <SinglePost loading={!data} />
      ) : (
        <div
          style={{
            width: "100%",
            padding: "4px",
            display: "flex",
            gap: "2px",
            flexWrap: "wrap",
          }}
        >
          {data?.data.map((items) => (
            <SinglePost items={items} />
          ))}
        </div>
      )}
    </>
  );
};

export default Post;
