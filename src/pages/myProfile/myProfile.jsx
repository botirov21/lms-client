import React from "react";
import VidioImage1 from "../../assets/vidioImage.png";
import VidioImage2 from "../../assets/vidioImage2.png";
import VidioImage3 from "../../assets/vidioImage3.png";
import VidioImage4 from "../../assets/vidioImage4.png";
import VidioImage5 from "../../assets/vidioImage5.png";
import VidioImage6 from "../../assets/vidioImage6.png";
import VidioImage7 from "../../assets/vidioImage7.png";
import VidioImage8 from "../../assets/vidioImage8.png";
import SideBarImage from '../../assets/appBar-image.png'
import profileImage from '../../assets/profileImg.png'
import courseBtnImage from '../../assets/courseBtn-image.png'
import courseBtnImage2 from '../../assets/courseBtnImage2.png'

import SideBar from "../../components/sideBar/sideBar";
import { MainWrapper, ProfileWrapper, SideBarWrapper, SideLink } from "./myProfileStyle";
import { Button, Stack } from "@mui/material";
import PopUp from "../../components/popUp/popUp";

const MyProfile = () => {
  return (
    <ProfileWrapper>
      <SideBarWrapper>
        <SideBar/>
      </SideBarWrapper>
      <MainWrapper>
        <div className="vidio-wrap">
          <div className="vidioWrap-left">
             <img style={{width: 250, height:250, border: 'solid #FCE300 6px', borderRadius: "70px"}} src={SideBarImage} alt="" />
              <ul>
                Username
                <li>User fee</li>
                <li>User email</li>
                <li>User contact number</li>
                <li>User address</li>
             </ul>
             <div style={{display: 'flex', gap: 20, alignItems: 'center'}}>
                <img style={{width: 40, height: 45}} src={profileImage} alt="" /> <p>35 points</p>
             </div>
             <Stack spacing={2} direction="column">
                 <PopUp/>
                 <Button className="profile-button2" variant="outlined">Update Key</Button>
             </Stack>
          </div>
          <div className="vidioWrap-right">
            <div className="vidio">
              <img style={{ height: 180 }} src={VidioImage7} alt="" />
              <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    padding: 15,
                  }}
                  >
                  <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
                     <label>0%</label>
                      <div style={{background: '#C0C0C0', width: 350, height:10}}></div>
                  </div>
                  <p className="vidio-text">
                      Course name can be multi lines.{" "}
                  </p>
                  <p className="vidio-text">Teacher's name</p>
                  <Stack spacing={2} direction="row">
                     <Button className="course-buttons" variant="outlined">Course certificate <img src={courseBtnImage} alt="" /></Button>
                     <Button className="course-buttons" variant="outlined">Course Notes <img src={courseBtnImage2} alt="" /> </Button>
                  </Stack>
               </div>
              <div className="vidio-buttonWrap">
                <SideLink to="/detailPrograms">
                  <button className="vidio-button">Curso</button>
                </SideLink>
              </div>{" "}
            </div>
            <div className="vidio">
              <img style={{ height: 180 }} src={VidioImage8} alt="" />
              <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    padding: 15,
                  }}
                  >
                  <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
                     <label>0%</label>
                      <div style={{background: '#C0C0C0', width: 350, height:10}}></div>
                  </div>
                  <p className="vidio-text">
                      Course name can be multi lines.{" "}
                  </p>
                  <p className="vidio-text">Teacher's name</p>
                  <Stack spacing={2} direction="row">
                     <Button className="course-buttons" variant="outlined">Course certificate <img src={courseBtnImage} alt="" /></Button>
                     <Button className="course-buttons" variant="outlined">Course Notes <img src={courseBtnImage2} alt="" /> </Button>
                  </Stack>
               </div>
              <div className="vidio-buttonWrap">
                <SideLink to="/detailPrograms">
                  <button className="vidio-button">Curso</button>
                </SideLink>
              </div>{" "}
            </div>
            <div className="vidio">
              <img style={{ height: 180 }} src={VidioImage4} alt="" />
              <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    padding: 15,
                  }}
                  >
                  <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
                     <label>0%</label>
                      <div style={{background: '#C0C0C0', width: 350, height:10}}></div>
                  </div>
                  <p className="vidio-text">
                      Course name can be multi lines.{" "}
                  </p>
                  <p className="vidio-text">Teacher's name</p>
                  <Stack spacing={2} direction="row">
                     <Button className="course-buttons" variant="outlined">Course certificate <img src={courseBtnImage} alt="" /></Button>
                     <Button className="course-buttons" variant="outlined">Course Notes <img src={courseBtnImage2} alt="" /> </Button>
                  </Stack>
               </div>
              <div className="vidio-buttonWrap">
                <SideLink to="/detailPrograms">
                  <button className="vidio-button">Curso</button>
                </SideLink>
              </div>{" "}
            </div>
          </div>
        </div>
      </MainWrapper>
    </ProfileWrapper>
  );
};

export default MyProfile;
