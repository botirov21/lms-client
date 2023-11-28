import styled from "styled-components";
import img from "../../assets/welcome.png";
import { Link } from "react-router-dom";


export const SideLink = styled(Link)`
text-decoration:none;
`

export const WelcomeWrapper = styled.div`
  display: flex;
  height: 100vh;
  background-image: url(${img});
  background-size: cover;
  height: 100vh;
  display: flex;
`;
export const SideBarWrapper = styled.div`
  display: flex;
  flex: 1;
  border-top-right-radius: 25px;
  border-bottom-right-radius: 25px;
  z-index: 2;
  position: absolute;
  height: 100vh;
`;
export const DataWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 6;
  justify-content: center;
  align-items: center;
  h1 {
    color: #fff;
    text-align: center;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    font-family: Montserrat;
    font-size: 60px;
    font-weight: 600;
   }
  h3 {
    color: #fff;
    text-align: center;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    font-family: Montserrat;
    font-size: 35px;
    font-style: normal;
    font-weight: 400;
    width: 503px;
    height: 86px;
  }
  button {
    color: #fff;
    text-align: center;
    text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
    font-family: Montserrat;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    border-radius: 50px;
    background: linear-gradient(92deg, #00F5FC 0.68%, #3290FF 99.28%);
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    border:none;
    width: 250px;
    height: 60px;
    cursor: pointer;
}
`;
