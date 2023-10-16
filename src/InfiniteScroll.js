import React from "react";
import SinglePost from "./SinglePost";

const InfiniteScroll = () => {
  //     const [skip, setSkip] = useState(0);
  //   const [posts, setPosts] = useState<any[]>([]);
  //   const [hasMore, setHasMore] = useState(true);

  // const fetchData = async () => {
  //   const response = await axios.get(
  //     "https://simple-social.onrender.com/posts/",
  //     {
  //       params: {
  //         post_limit: 2,
  //         skip,
  //       },
  //     }
  //   );

  //   if (response && response.data) {
  //     const newPosts = [...posts, ...response.data];
  //     console.log(newPosts, "n");
  //     if (response.data.length < 2) {
  //       setHasMore(false);
  //     }
  //     setPosts(newPosts);
  //     setSkip(skip + 2);
  //   }
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);
  return (
    <div>
      {/* {
        postMessage.map((item)=><SinglePost items={item}/>)
    } */}
    </div>
  );
};

export default InfiniteScroll;
