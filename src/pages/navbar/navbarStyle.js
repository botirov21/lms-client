import styled from "styled-components";

export const NavbarWrapper = styled.div`
  height: 70px;
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
  top: 0px;
  position: absolute;
  z-index: 1; 

  .container{
   height: 70px;
   display: flex;
   justify-content: end;
   align-items: center;
   padding-right:30px;
  }
  .navbar-button {
    background: none;
    border:none;
  }

  .search-bar {
    position: relative;
    display: flex;
    justify-content:end;
    align-items: center;
    width:270px;
    padding-right:30px;
  }
  .searchImg {
    position: absolute;
    padding: 10px;
    top: 2px;
    z-index: 1; 
  }
  .navbar-input {
    width: 250px;
    height: 23px;
    border-radius: 25px;
    background: rgba(166, 166, 166, 0.5);
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset;
    padding: 10px;
    border:none;
    }
  .navbar-input::placeholder {
    padding: 10px;
    color: #1a1a1a;
    font-family: Montserrat;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  .navbar-input:focus{
    outline-width: none;
  }
`;
