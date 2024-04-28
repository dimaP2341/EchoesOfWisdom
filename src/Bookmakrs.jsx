import React, { useContext } from "react";
import { AppContext } from "./Home";
import { Post, PostBody, PostHeader } from "./ReadBlogs";

const Bookmarks = () => {
  const { bookmarkedPosts } = useContext(AppContext);

  return (
    <div style={{ height: "88.3vh", overflow: "scroll" }}>
      <div style={{ fontSize: "2.4rem" }}>
        {bookmarkedPosts.length === 0 ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "88.3vh"
            }}
          >
            You have no bookmarks
          </div>
        ) : (
          bookmarkedPosts.map(bookmark => (
            <Post key={bookmark.id}>
              <PostHeader style={{fontSize: "28px"}}>{bookmark.title}</PostHeader>
              <PostBody>{bookmark.body}</PostBody>
            </Post>
          ))
        )}
      </div>
    </div>
  );
};

export default Bookmarks;
