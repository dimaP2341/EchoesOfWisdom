import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
// eslint-disable-next-line no-unused-vars
import MyBlog from "./Blog";
import StyledLink from "./styles/StyledLink.styled";

const Nav = styled.nav`
background: white;
padding: .5rem;
display: flex;
justify-content: space-between;
border: 3px solid black
`;

const Links = styled.div`
display: flex;
gap: 0.5rem;  
margin-top: 0.5rem;
& a:hover {
    transform: scale(1.2)
}
`;

const Main = styled.div`
display: grid;
grid-template-columns: 1fr 3fr;
height: 88.3vh;
`;

const Aside = styled.div`
border-right: .3rem solid black;
border-left: .3rem solid black;
display: flex;
flex-direction: column;
gap: 2rem;
font-size: 1.4rem;
justify-content: center;
align-items: center;
`;

const Content = styled.div`
/* background-color: blue; */
`;

const Footer = styled.footer`
background: white;
border-top: 3px solid black;
display: flex;
justify-content: center;
align-items: center;
height: 2.8vh;
`;

export const AppContext = React.createContext();


const Home = () => {
    const [bookmarkedPosts, setBookmarkedPosts] = useState([]);
    const [posts, setPosts] = useState([]);
    const [isPostBookmarked, setIsPostBookmarked] = useState({});
    
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(posts => setPosts(posts));
    }, []);
    
    const defaultState = {
        bookmarkedPosts,
        posts,
        isPostBookmarked,
        setBookmarkedPosts,
        setPosts,
        setIsPostBookmarked,
    };
    
    return (
    <div style={{height: "100vh"}}>
        <Nav>
            <div><svg xmlns="http://www.w3.org/2000/svg" width="54" height="54" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5.407 10.516h-.975c-.5 0-.592-.382-.592-.854.001-2.023-1.636-3.662-3.655-3.662h-2.53c-2.018 0-3.655 1.639-3.655 3.662v4.676c0 2.023 1.637 3.662 3.654 3.662h4.692c2.017 0 3.654-1.639 3.654-3.662v-3.229c0-.328-.267-.593-.593-.593zm-7.714-1.516h2.113c.384 0 .694.335.694.75s-.31.75-.693.75h-2.114c-.382 0-.693-.335-.693-.75s.311-.75.693-.75zm4.566 6h-4.519c-.409 0-.74-.335-.74-.75 0-.414.331-.75.74-.75h4.519c.41 0 .741.335.741.75s-.331.75-.741.75z"/></svg></div>
            <div>
                <div style={{textAlign: "center"}}>Contact with us:</div>
                <Links>
                <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 7.082c1.602 0 1.792.006 2.425.035 1.627.074 2.385.845 2.46 2.459.028.633.034.822.034 2.424s-.006 1.792-.034 2.424c-.075 1.613-.832 2.386-2.46 2.46-.633.028-.822.035-2.425.035-1.602 0-1.792-.006-2.424-.035-1.63-.075-2.385-.849-2.46-2.46-.028-.632-.035-.822-.035-2.424s.007-1.792.035-2.424c.074-1.615.832-2.386 2.46-2.46.632-.029.822-.034 2.424-.034zm0-1.082c-1.63 0-1.833.007-2.474.037-2.18.1-3.39 1.309-3.49 3.489-.029.641-.036.845-.036 2.474 0 1.63.007 1.834.036 2.474.1 2.179 1.31 3.39 3.49 3.49.641.029.844.036 2.474.036 1.63 0 1.834-.007 2.475-.036 2.176-.1 3.391-1.309 3.489-3.49.029-.64.036-.844.036-2.474 0-1.629-.007-1.833-.036-2.474-.098-2.177-1.309-3.39-3.489-3.489-.641-.03-.845-.037-2.475-.037zm0 2.919c-1.701 0-3.081 1.379-3.081 3.081s1.38 3.081 3.081 3.081 3.081-1.379 3.081-3.081c0-1.701-1.38-3.081-3.081-3.081zm0 5.081c-1.105 0-2-.895-2-2 0-1.104.895-2 2-2 1.104 0 2.001.895 2.001 2s-.897 2-2.001 2zm3.202-5.922c-.397 0-.72.322-.72.72 0 .397.322.72.72.72.398 0 .721-.322.721-.72 0-.398-.322-.72-.721-.72z"/></svg></a>
                <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.5 8.778c-.441.196-.916.328-1.414.388.509-.305.898-.787 1.083-1.362-.476.282-1.003.487-1.564.597-.448-.479-1.089-.778-1.796-.778-1.59 0-2.758 1.483-2.399 3.023-2.045-.103-3.86-1.083-5.074-2.572-.645 1.106-.334 2.554.762 3.287-.403-.013-.782-.124-1.114-.308-.027 1.14.791 2.207 1.975 2.445-.346.094-.726.116-1.112.042.313.978 1.224 1.689 2.3 1.709-1.037.812-2.34 1.175-3.647 1.021 1.09.699 2.383 1.106 3.773 1.106 4.572 0 7.154-3.861 6.998-7.324.482-.346.899-.78 1.229-1.274z"/></svg></a>
                <a href="#"><svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0 4.5c-3.314 0-6 2.487-6 5.556 0 1.748.872 3.307 2.236 4.326v2.118l2.043-1.121c.545.151 1.123.232 1.721.232 3.314 0 6-2.487 6-5.555 0-3.069-2.686-5.556-6-5.556zm.596 7.481l-1.528-1.629-2.981 1.629 3.279-3.481 1.566 1.63 2.944-1.63-3.28 3.481z"/></svg></a>
                <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16.23 7.102c-2.002-.136-6.462-.135-8.461 0-2.165.148-2.419 1.456-2.436 4.898.017 3.436.27 4.75 2.437 4.898 1.999.135 6.459.136 8.461 0 2.165-.148 2.42-1.457 2.437-4.898-.018-3.436-.271-4.75-2.438-4.898zm-6.23 7.12v-4.444l4.778 2.218-4.778 2.226zm2-12.222c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12z"/></svg></a>
                </Links>
            </div>
        </Nav>
        <AppContext.Provider value={defaultState}>
        <Main>
        <Aside>
        <StyledLink to="/">Write a blog</StyledLink>
        <StyledLink to="read">Read all blogs</StyledLink>
        <StyledLink to="bookmarks">Bookmarks</StyledLink>
        <StyledLink to="about">About</StyledLink>
        <StyledLink to="support">Support</StyledLink>
        </Aside>
        <Content>
        <Outlet/>
        </Content>
        </Main>
        </AppContext.Provider>
        <Footer>©️2024 Echoes of Wisdom | All Rights Reserved</Footer>
    </div>
  );
};

export default Home;