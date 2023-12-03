import styled from "styled-components";
import { Link } from "react-router-dom";

export const SideLink = styled(Link)`
  text-decoration: none;
`;
export const ProfileWrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  background: var(
    --bg-dark-1,
    linear-gradient(120deg, #070a15 7.55%, #2b3042 100%)
  );

  /* .logo{
      width: 49.002px;
      height: 32.137px;
    } */
`;
export const SideBarWrapper = styled.div`
  display: flex;
  flex: 1;
  border-top-right-radius: 25px;
  border-bottom-right-radius: 25px;
  z-index: 2;
  height: 100vh;
`;
export const MainWrapper = styled.div`
  padding-top: 40px;
  display: flex;
  flex: 5;
  justify-content: center;
  align-items: center;
  .vidio-wrap {
    display: flex;
    justify-content: center;
    gap: 20px;
    padding-right: 40px;
    height: 85vh;
    width: 100%;
  }
  .vidioWrap-left {
    display: flex;
    flex: 1;
    flex-direction: column;
    padding: 0px 20px 0px 20px;
    justify-content: center;
  }
  ul {
    list-style-type: none;
    color: #fff;
    font-family: Montserrat;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    line-height: 30px;
    padding: 0px;
  }
  li {
    color: #fff;
    font-family: Montserrat;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 25px;
  }
  p {
    color: var(--Primary-Color, #00f5fc);
    font-family: Montserrat;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  .profile-button {
    width: 250px;
    height: 50px;
    border-radius: 50px;
    background: linear-gradient(92deg, #00f5fc 0.68%, #3290ff 99.28%);
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    color: #fff;
    text-align: center;
    text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
    font-family: Montserrat;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-transform: none !important;
  }
  .profile-button2 {
    width: 250px;
    height: 50px;
    border-radius: 50px;
    border: 3px solid var(--Primary-Gradiant, #00f5fc);
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    color: var(--Primary-Color, #00f5fc);
    text-align: center;
    font-family: Montserrat;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-transform: none !important;
  }
  .vidioWrap-right {
    display: flex;
    flex: 3.5;
    gap: 30px;
    padding-top:20px;
    flex-direction: column;
    border-left: solid 2px white;
    justify-content: center;
    padding-left: 50px;
    border-left-color: #C0C0C0;
  }
  .vidio {
    display: flex;
    justify-content: space-between;
    position: relative;
    border-radius: 20px;
    background: var(
      --bg-dark-secondary,
      linear-gradient(
        180deg,
        rgba(51, 50, 59, 0.5) 0%,
        rgba(118, 118, 118, 0) 100%
      )
    );
  }
  label {
    color: #fff;
    font-family: Montserrat;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  .course-buttons {
    width: 220px;
    height: 50px;
    border-radius: 10px;
    background: var(
      --Background-boton-setect,
      linear-gradient(
        180deg,
        rgba(187, 150, 150, 0.1) 0%,
        rgba(0, 0, 0, 0.1) 100%
      )
    );
    display: inline-flex;
    padding: 10px;
    align-items: center;
    gap: 15px;
    text-transform: none !important;
    border: none;
    color: var(--Primary-Color, #00f5fc);
    font-family: Montserrat;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  .vidio-buttonWrap {
    position: absolute;
    bottom: 30px;
    left: 100px;
  }
  .vidio-button {
    z-index: 1;
    border: none;
    border-radius: 5px;
    background: linear-gradient(91deg, #ffd833 0.43%, #48b266 99.46%);
    width: 150px;
    height: 30px;
    cursor: pointer;
    color: #fff;
    text-shadow: 1px 2px 2px rgba(0, 0, 0, 0.25);
    font-family: Montserrat;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  .vidio-text {
    color: #fff;
    font-family: Montserrat;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    width: 176px;
  }
  .middleVidio-button {
    border-radius: 5px;
    background: linear-gradient(91deg, #ff33d2 0.43%, #4893b2 99.46%);
    width: 150px;
    height: 30px;
    flex-shrink: 0;
    color: #fff;
    text-shadow: 1px 2px 2px rgba(0, 0, 0, 0.25);
    font-family: Montserrat;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    z-index: 1;
    border: none;
  }
`;
