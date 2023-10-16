import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const SinglePost = ({ items, loading }) => {
  const img =
    "https://images.unsplash.com/photo-1505968409348-bd000797c92e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60";

  return (
    <div>
      {loading ? (
        <LazyLoadImage
          effect="black-and-white"
          width={200}
          style={{ aspectRatio: 1, objectFit: "cover" }}
        />
      ) : (
        <img
          src={items.post.images[0]}
          width="200px"
          style={{ aspectRatio: 1, objectFit: "cover" }}
        />
      )}
    </div>
  );
};

export default SinglePost;
