import React, { useReducer } from 'react'
import appBarButtonImg1 from '../../assets/appBar-button1.png';
import appBarButtonImg2 from '../../assets/appBar-button2.png';
import appBarButtonImg3 from '../../assets/appBar-button3.png';
import appBarButtonImg4 from '../../assets/appBar-button4.png';
import appBarButtonImg5 from '../../assets/appBar-button5.png';
import appBarButtonImg6 from '../../assets/appBar-button6.png';
import appBarButtonImg7 from '../../assets/appBar-button7.png';
import SideBarImage from '../../assets/appBar-image.png'
import logo2 from '../../assets/Logo_vgroup2.png'
import { SideBarWrapper, SideLink } from './sideBarStyle';

const reducer = (state, action) => {
    switch (action.type) {
      case "showContainer":
        return { showContainer: !state.showContainer };
      default:
        return state;
    }
};

const SideBar = () => {
    const [state, dispatch] = useReducer(reducer, {
        showContainer: true,
      });
      function handleClick() {
        dispatch({ type: "showContainer" });
      }  
  return (
    <SideBarWrapper>
    <div className='sideBar'>
      <div className='button-wrap'>
        <div className='sideBar-ImageWrap'>
         {state.showContainer && (
             <>
               <img style={{paddingBottom:30}} src={logo2} alt="" />
               <img src={SideBarImage} alt="" />
             </>
          )}
        </div>  
        <button onClick={handleClick} className='sideBar-button'> <img src={appBarButtonImg1} alt="" /></button>
        <SideLink to="/" >
        <button className='sideBar-button'> <img src={appBarButtonImg2} alt="" /></button>
        </SideLink>
        <SideLink to='/myPrograms'>
        <button className='sideBar-button'> <img src={appBarButtonImg3} alt="" /></button>
        </SideLink>
        <SideLink to='/myProfile'>
        <button className='sideBar-button'> <img src={appBarButtonImg4} alt="" /></button>
        </SideLink>
        <button className='sideBar-button'> <img src={appBarButtonImg5} alt="" /></button>
        <button className='sideBar-button'> <img src={appBarButtonImg6} alt="" /></button>
        <button className='sideBar-button'> <img src={appBarButtonImg7} alt="" /></button>
      </div>
    </div>
    {state.showContainer && (
      <div className='sideBar-data'>
        <div className='pageNames'>
          <p></p>
          <SideLink to="/" >
          <p className='pageName'>Welcome</p>
          </SideLink>
          <SideLink to='/myPrograms'>
          <p className='pageName' >My programs</p>
          </SideLink>
          <p className='pageName'> My profile</p>
          <p className='pageName'>My notes</p>
          <p className='pageName'>Virtual classroom</p>
          <p className='pageName' >My rewards</p>
        </div>
      </div>
    )}
  </SideBarWrapper>
  )
}

export default SideBar