import { Link } from "react-router-dom";
import styled from "styled-components";

export const SideLink = styled(Link)`
text-decoration:none;
`

export const SideBarWrapper = styled.div`
  display: flex;
  border-top-right-radius: 25px;
  border-bottom-right-radius: 25px;
  height: 100vh;
  .sideBar {
    width: 50px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: end;
    padding-bottom:40px;
    background: var(
      --bg-dark-secondary,
      linear-gradient(
        180deg,
        rgba(51, 50, 59, 0.5) 0%,
        rgba(118, 118, 118, 0) 100%
      )
    );
  }
  .sideBar-data {
    width: 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: end;
    background: var(
      --bg-dark-secondary,
      linear-gradient(
        180deg,
        rgba(51, 50, 59, 0.5) 0%,
        rgba(118, 118, 118, 0) 100%
      )
    );
    border-radius: 0px 50px 50px 0px;
    padding: 10px;
    padding-bottom:40px;  
  }
  .pageNames {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 15px;
  }
  .sideBar-button {
    background: none;
    border: none;
    cursor: pointer;
    height: 50px;
    width: 55px;
    display: inline-flex;
    padding: 10px;
    align-items: center;
  }
  .sideBar-ImageWrap {
    position: relative;
    padding-left:15px;
  }
  .button-wrap {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 15px;
  }
  .pageName{
    color: #c0c0c0;
    font-family: Montserrat;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    height: 22px;
    width: 125px;
    display: inline-flex;
  }
`;
