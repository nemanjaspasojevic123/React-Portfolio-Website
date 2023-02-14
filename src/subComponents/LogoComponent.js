import styled from "styled-components";
import { mediaQueries } from "../components/Themes";
import MyLogo from "../assets/Images/MyLogo192.png";

const Logo = styled.div`
  display: inline-block;
  position: fixed;
  .myLogoPic {
  width: 40%;
  height: auto;
  left: 2rem;
  top: 2rem;
  z-index: 3;
}
  ${mediaQueries(40)`
      left:1rem;
      top:2rem;
  `};
`;

const LogoComponent = () => {
  return <Logo> <img className="myLogoPic" src={MyLogo} alt="My Pic" /></Logo>;
};

export default LogoComponent;
