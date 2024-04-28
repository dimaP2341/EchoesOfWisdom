import React, { useState, useEffect } from "react";
import styled from "styled-components";

const ContainerLoader = styled.div`
    background: white;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    /* position: absolute; */
    font-size: 2.4rem;
    font-weight: bold;
`;

const Loader = () => {
    const [dots, setDots] = useState("");

    useEffect(() => {
        const interval = setInterval(() => {
            setDots(prevDots => prevDots === "..." ? "" : prevDots + ".");
        }, 500);

        return () => clearInterval(interval);
    }, []);

    return (
        <ContainerLoader>
            Loading {dots}
        </ContainerLoader>
    );
};

export default Loader;