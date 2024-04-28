import { Link } from "react-router-dom";
import styled from "styled-components";

 const StyledLink = styled(Link)`
  color: black;
  position: relative;
  cursor: pointer;
  &:hover {
    transform: translateY(-.2rem)
  }
&:after {
  border: none;
  content: "";
  display: block;
  position: absolute;
  right: 0;
  bottom: 0;
  width: 0;
  height: 2px;
  background-color: black;
  transition: width 0.5s;
}

&:hover:before {
  border-bottom: 2px solid black;
}

&:hover:after {
  border: none;
  content: "";
  width: 100%;
  display: block;
  position: absolute;
  left: 0;
  bottom: 0;
  height: 2px;
  background-color: black;
  transition: width 0.5s;
}
`;

export default StyledLink;