import styled from "styled-components";
import { Link } from "react-router-dom";

export const SideLink = styled(Link)`
  text-decoration: none;
`;
export const DetailWrapper = styled.div`
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
  display: flex;
  flex: 6;
  justify-content: center;
  align-items:center;
  border: solid black 1px;
  padding-top:50px;
  .vidio-wrap {
    display: flex;
    width: 100%;
    justify-content: center;
    gap: 20px;
    padding-right: 50px;
  }
  .vidioWrap-left {
    display: flex;
    align-items: end;
    flex: 2;
    flex-direction: column;
    border-right: solid 5px #00f5fc;
  }
  .vidioWrap-right {
    display: flex;
    flex: 1;
  }
  .vidio {
    padding: 20px 30px 30px 0px;
    width: 600px;
    height: 300px;
    border-top: solid 1px #c0c0c0;
    border-bottom: solid 1px #c0c0c0;
  }
  .lessonName {
    color: #fff;
    font-family: Montserrat;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  .courseName {
    color: #fff;
    font-family: Montserrat;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  .Transcription {
    background: var(
      --bg-dark-secondary,
      linear-gradient(
        180deg,
        rgba(51, 50, 59, 0.5) 0%,
        rgba(118, 118, 118, 0) 100%
      )
    );
    width: 600px;
    padding: 15px;
  }
  .Transcription-text {
    color: var(--color-typo-dark-theme, #c0c0c0);
    text-align: justify;
    font-family: Montserrat;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;
