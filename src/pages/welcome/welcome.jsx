import React from 'react'
import {  DataWrapper, SideBarWrapper, SideLink, WelcomeWrapper } from './welcomeStyle';
import SideBar from '../../components/sideBar/sideBar';


const Welcome = () => {

  return (
    <WelcomeWrapper>
        <SideBarWrapper>
         <SideBar/>
        </SideBarWrapper>
        <DataWrapper>
           <h1>WELCOME STUDENT</h1>
           <h3>WE INVITE YOU TO KNOW THE LMS EXPERIENCE </h3>
           <SideLink to='/myPrograms'>
             <button>Begin</button>
           </SideLink>
        </DataWrapper>
    </WelcomeWrapper>
  )
}

export default Welcome
