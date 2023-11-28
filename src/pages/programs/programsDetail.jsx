import React from 'react'

import SideBar from '../../components/sideBar/sideBar';
import { DetailWrapper, SideBarWrapper, VidioWrapper } from './programsDetailStyle';
import VidioImage1 from '../../assets/vidioImage.png';



const DetailPrograms = () => {

  return (
    <DetailWrapper>
      <SideBarWrapper>
        <SideBar/>
      </SideBarWrapper>
      <VidioWrapper>
          <div className='vidio-wrap '>
            <div className='vidioWrap-left'>
              <div  style={{display: 'flex', justifyContent: 'space-between'}}>
                <h2>Lesson name</h2>
                <div style = {{display: 'flex'}} >
                  <p>Course name</p>
                  <img style={{width: '60px', height: '60px'}} src={VidioImage1} alt="" />
                </div>
              </div>
              <div className='vidio'>
               <iframe width="801px" height="390px" src="https://www.youtube.com/embed/WR1ydijTx5E?si=b5mMFHlc0QV8-rPT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
             </div>
            </div>
            <div className='vidioWrap-right'>
               <h1>sss</h1>
            </div>
          </div>
      </VidioWrapper>
    </DetailWrapper>
  )
}

export default DetailPrograms
