import styled from "styled-components";
import { Link } from "react-router-dom";

export const SideLink = styled(Link)`
text-decoration:none;
`
export const HomeWrapper = styled.div`
  display: flex;
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
  position: absolute;
  height: 100vh;
`;
export const VidioWrapper = styled.div`
  padding-top: 40px;
  display: flex;
  flex: 6;
  justify-content: end;
  align-items: center;
  .vidio-wrap {
    display: flex;
    justify-content: center;
    gap: 20px;
    padding-right: 40px;
  }
  .vidioWrap-left {
    display: flex;
    flex: 1;
    gap: 35px;
    flex-direction: column;
  }
  .vidioWrap-middle {
    display: flex;
    flex: 1;
    gap: 35px;
    flex-direction: column;
  }
  .vidioWrap-right {
    display: flex;
    flex: 1;
    gap: 35px;
    flex-direction: column;
  }
  .vidio {
    display: flex;
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
    justify-content: center;
  }
  .vidio-buttonWrap{
    position: absolute;
    bottom: 20px;
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
