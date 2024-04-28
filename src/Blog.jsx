import React, { useContext, useState } from "react";
import uniqueUserId from "unique-user-id";
import styled from "styled-components";
import Input from "./styles/Input.styled";
import { SupportBtn } from "./Support";
import { AppContext } from "./Home";

const BlogHeader = styled.h2`
font-size: 2.4rem;
text-align: center;
display: block;
padding: 2rem 0 0 0;
`;

const BlogForm = styled.form`
display: grid;
grid-template-columns: repeat(1fr, 4);
padding: 2rem;
gap: .5rem;
`;

const BlogSelect = styled.select`
font-size: 1rem;
padding: .5rem;
margin-top: .5rem;
`;

const Buttons = styled.div`
display: flex;
align-items: center;
justify-content: center;
gap: 1.6rem;
padding: 2rem;
`;

const MyBlog = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const {posts,setPosts, bookmarkedPosts, setBookmarkedPosts } = useContext(AppContext);

  const handleBlog = (e) => {
    e.preventDefault();
    const newBlog = { email, title: name, body: description, id: uniqueUserId() };
    setPosts((prevPosts) => [...prevPosts, newBlog]);
    setBookmarkedPosts((prevBookmarkedPosts) => [...prevBookmarkedPosts, newBlog]);    setEmail("");
    setName("");
    setDescription("");
  };

  return (
    <div style={{height: "88.3vh"}}>
      <BlogHeader>Creating a new blog</BlogHeader>
      <BlogForm onSubmit={handleBlog}>
        <label htmlFor="email">Email</label>
        <Input value={email} required onChange={e => setEmail(e.target.value)} type="text" id="email" placeholder="Enter your email" />
        <label htmlFor="name">Name</label>
        <Input value={name} required onChange={e => setName(e.target.value)} type="text" id="name" placeholder="Enter your name" />
        <label htmlFor="description">Description</label>
        <textarea value={description} onChange={e => setDescription(e.target.value)} name="description" id="description" cols="30" rows="20"></textarea>
        <BlogSelect name="select" id="theme">
          <option value="select">Select theme of your blog</option>
          <option value="captures">Captures</option>
          <option value="profession">Professions</option>
          <option value="youtube">YouTube</option>
          <option value="books">Books</option>
          <option value="relationship">Relationship</option>
        </BlogSelect>
        <Buttons>
          <SupportBtn type="submit" style={{width: "12rem"}}>Add</SupportBtn>
          <SupportBtn style={{width: "12rem"}}>Delete</SupportBtn>
        </Buttons>
      </BlogForm>
    </div>
  );
};

export default MyBlog;