import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import Loader from "./Loader";
import { PiBookmarkSimpleLight, PiBookmarkSimpleFill } from "react-icons/pi";
import { AppContext } from "./Home";

const LoaderWrapper = styled.div`
  height: 88.3vh ;
`;

export const Post = styled.div`
  padding: 2rem 2rem;
  border: 1px solid black;
  position: relative;
`;

export const PostHeader = styled.h2`
  text-align: center;
  padding: 1rem;
`;

export const PostBody = styled.p`
  font-size: 1rem;
`;

const ReadBlogs = () => {
  const {isPostBookmarked, setIsPostBookmarked, setBookmarkedPosts, posts, setPosts} = useContext(AppContext);
  // const storedPosts = JSON.parse(localStorage.getItem("posts"));
  // const [isPostBookmarked, setIsPostBookmarked] = useState({});
  // const [bookmarkedPosts, setBookmarkedPosts] = useState([]);
  // const [posts, setPosts] = useState([]);
  
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(posts => setPosts(posts));
  }, []);
  console.log(posts);
  
  const handleBookmark = postId => {
    const postToAdd = posts.find(post => post.id === postId);
    setBookmarkedPosts(prevBookmarkedPosts => {
      const index = prevBookmarkedPosts.findIndex(post => post.id === postId);
      if (index !== -1) {
        setIsPostBookmarked({ ...isPostBookmarked, [postId]: false });
        return prevBookmarkedPosts.filter(post => post.id !== postId);
      } else {
        setIsPostBookmarked({ ...isPostBookmarked, [postId]: true });
        return [...prevBookmarkedPosts, postToAdd];
      }
    });
  };

  useEffect(() => {
    localStorage.setItem("bookmarkedPosts", JSON.stringify(isPostBookmarked));
  }, [isPostBookmarked]);  

  return (
    <div style={{ height: "88.3vh", overflow: "scroll" }}>
      {posts.length > 0 ? (
        posts.map(post => (
          <Post key={post.id}>
            <PostHeader >{post.title}</PostHeader>
            <PostBody>{post.body}</PostBody>
            <div onClick={() => handleBookmark(post.id)}>
  {isPostBookmarked[post.id] ? (
    <PiBookmarkSimpleFill className="bookmark" />
  ) : (
    <PiBookmarkSimpleLight className="bookmark" />
  )}
</div>
          </Post>
        ))
      ) : (
        <LoaderWrapper>
          <Loader />
        </LoaderWrapper>
      )}
    </div>
  );
};

export default ReadBlogs;