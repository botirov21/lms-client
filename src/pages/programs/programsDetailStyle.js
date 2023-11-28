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
  padding-top: 40px;
  display: flex;
  flex: 6;
  justify-content: center;
  align-items: center;
  .vidio-wrap {
    display: flex;
    justify-content: center;
    gap: 20px;
  }
  .vidioWrap-left {
    display: flex;
    flex: 2;
    gap: 35px;
    flex-direction: column;
    border-right: solid 5px #00F5FC;
    height:700px;
  }
  .vidioWrap-right {
    display: flex;
    flex: 1;
    gap: 35px;
    flex-direction: column;
  }
  .vidio {
    padding: 20px 30px 30px 0px;
    width: 801px;
    height: 390px;
    border-top: solid 1px #C0C0C0;
    border-bottom: solid 1px #C0C0C0;
  }
`;
