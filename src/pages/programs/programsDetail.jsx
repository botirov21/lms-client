import React from "react";

import SideBar from "../../components/sideBar/sideBar";
import {
  DetailWrapper,
  SideBarWrapper,
  VidioWrapper,
} from "./programsDetailStyle";
import VidioImage1 from "../../assets/vidioImage.png";
import BasicTabs from "../../components/tapBar/tapBar";

const DetailPrograms = () => {
  return (
    <DetailWrapper>
      <SideBarWrapper>
        <SideBar />
      </SideBarWrapper>
      <VidioWrapper>
        <div className="vidio-wrap ">
          <div className="vidioWrap-left">
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "20px",
                width: 600,
              }}
            >
              <h2 className="lessonName">Lesson name</h2>
              <div style={{ display: "flex", gap: 20 }}>
                <p className="courseName">Course name</p>
                <img
                  style={{ width: "60px", height: "60px" }}
                  src={VidioImage1}
                  alt=""
                />
              </div>
            </div>
            <div className="vidio">
              <iframe
                width="600px"
                height="300px"
                src="https://www.youtube.com/embed/WR1ydijTx5E?si=b5mMFHlc0QV8-rPT"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
            <div className="Transcription">
              <p className="Transcription-text">
                {" "}
                The standard Lorem Ipsum passage, used since the 1500s "Lorem
                ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
              </p>
            </div>
          </div>
          <div className="vidioWrap-right">
            <BasicTabs />
          </div>
        </div>
      </VidioWrapper>
    </DetailWrapper>
  );
};

export default DetailPrograms;
