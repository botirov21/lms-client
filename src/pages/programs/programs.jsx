import React from 'react'
import { HomeWrapper, SideBarWrapper, SideLink, VidioWrapper } from './programsStyle'
import VidioImage1 from '../../assets/vidioImage.png';
import VidioImage2 from '../../assets/vidioImage2.png';
import VidioImage3 from '../../assets/vidioImage3.png';
import VidioImage4 from '../../assets/vidioImage4.png';
import VidioImage5 from '../../assets/vidioImage5.png';
import VidioImage6 from '../../assets/vidioImage6.png';
import VidioImage7 from '../../assets/vidioImage7.png';
import VidioImage8 from '../../assets/vidioImage8.png';

import SideBar from '../../components/sideBar/sideBar';


const Home = () => {

  return (
    <HomeWrapper>
      <SideBarWrapper>
        <SideBar />
      </SideBarWrapper>
      <VidioWrapper>
        <div className='vidio-wrap'>
          <div className='vidioWrap-left'>
            <div className='vidio'>
              <img style={{ height: 180, }} src={VidioImage1} alt="" />
              <div style={{ display: 'flex', flexDirection: 'column', padding: 15 }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="108" height="8" viewBox="0 0 108 8" fill="none">
                  <path d="M4 4H104" stroke="#00F5FC" stroke-width="7" stroke-linecap="round" />
                </svg>
                <p className='vidio-text'>Nombre del curso puede ser multi líneas. </p>
                <p className='vidio-text'>Nombre del profesor</p>
              </div>
              <div className='vidio-buttonWrap'>
                <SideLink to='/detailPrograms'>
                  <button className='vidio-button'>Curso</button>
                </SideLink>
              </div>
            </div>
            <div className='vidio'>
              <img style={{ height: 180 }} src={VidioImage4} alt="" />
              <div style={{ display: 'flex', flexDirection: 'column', padding: 15 }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="178" height="8" viewBox="0 0 208 8" fill="none">
                  <path d="M4 4H204" stroke="#C0C0C0" stroke-width="7" stroke-linecap="round" />
                </svg>
                <p className='vidio-text'>Nombre del curso puede ser multi líneas. </p>
                <p className='vidio-text'>Nombre del profesor</p>
              </div>
              <div className='vidio-buttonWrap'>
                <SideLink to='/detailPrograms'>
                  <button className='middleVidio-button'>Curso</button>
                </SideLink>
              </div>
            </div>
            <div className='vidio'>
              <img style={{ height: 180 }} src={VidioImage7} alt="" />
              <div style={{ display: 'flex', flexDirection: 'column', padding: 15 }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="178" height="8" viewBox="0 0 208 8" fill="none">
                  <path d="M4 4H204" stroke="#00F5FC" stroke-width="7" stroke-linecap="round" />
                </svg>
                <p className='vidio-text'>Nombre del curso puede ser multi líneas. </p>
                <p className='vidio-text'>Nombre del profesor</p>
              </div>
              <div className='vidio-buttonWrap'>
                <SideLink to='/detailPrograms'>
                  <button className='vidio-button'>Curso</button>
                </SideLink>
              </div>            </div>
          </div>
          <div className='vidioWrap-middle'>
            <div className='vidio'>
              <img style={{ height: 180, }} src={VidioImage2} alt="" />
              <div style={{ display: 'flex', flexDirection: 'column', padding: 15 }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="118" height="8" viewBox="0 0 148 8" fill="none">
                  <path d="M4 4H144" stroke="#00F5FC" stroke-width="7" stroke-linecap="round" />
                </svg>
                <p className='vidio-text'>Nombre del curso puede ser multi líneas. </p>
                <p className='vidio-text'>Nombre del profesor</p>
              </div>
              <div className='vidio-buttonWrap'>
                <SideLink to='/detailPrograms'>
                  <button className='vidio-button'>Curso</button>
                </SideLink>
              </div>            </div>
            <div className='vidio'>
              <img style={{ height: 180 }} src={VidioImage5} alt="" />
              <div style={{ display: 'flex', flexDirection: 'column', padding: 15 }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="178" height="8" viewBox="0 0 208 8" fill="none">
                  <path d="M4 4H204" stroke="#C0C0C0" stroke-width="7" stroke-linecap="round" />
                </svg>
                <p className='vidio-text'>Nombre del curso puede ser multi líneas. </p>
                <p className='vidio-text'>Nombre del profesor</p>
              </div>
              <div className='vidio-buttonWrap'>
                <SideLink to='/detailPrograms'>
                  <button className='middleVidio-button'>Curso</button>
                </SideLink>
              </div>            </div>
            <div className='vidio'>
              <img style={{ height: 180 }} src={VidioImage8} alt="" />
              <div style={{ display: 'flex', flexDirection: 'column', padding: 15 }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="178" height="8" viewBox="0 0 208 8" fill="none">
                  <path d="M4 4H204" stroke="#00F5FC" stroke-width="7" stroke-linecap="round" />
                </svg>
                <p className='vidio-text'>Nombre del curso puede ser multi líneas. </p>
                <p className='vidio-text'>Nombre del profesor</p>
              </div>
              <div className='vidio-buttonWrap'>
                <SideLink to='/detailPrograms'>
                  <button className='vidio-button'>Curso</button>
                </SideLink>
              </div>            </div>
          </div>
          <div className='vidioWrap-right'>
            <div className='vidio'>
              <img style={{ height: 180, }} src={VidioImage3} alt="" />
              <div style={{ display: 'flex', flexDirection: 'column', padding: 15 }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="8" viewBox="0 0 48 8" fill="none">
                  <path d="M4 4H44" stroke="#00F5FC" stroke-width="7" stroke-linecap="round" />
                </svg>
                <p className='vidio-text'>Nombre del curso puede ser multi líneas. </p>
                <p className='vidio-text'>Nombre del profesor</p>
              </div>
              <div className='vidio-buttonWrap'>
                <SideLink to='/detailPrograms'>
                  <button className='vidio-button'>Curso</button>
                </SideLink>
              </div>            </div>
            <div className='vidio'>
              <img style={{ height: 180 }} src={VidioImage6} alt="" />
              <div style={{ display: 'flex', flexDirection: 'column', padding: 15 }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="165" height="8" viewBox="0 0 165 8" fill="none">
                  <path d="M4 4H204" stroke="#C0C0C0" stroke-width="7" stroke-linecap="round" />
                </svg>
                <p className='vidio-text'>Nombre del curso puede ser multi líneas. </p>
                <p className='vidio-text'>Nombre del profesor</p>
              </div>
              <div className='vidio-buttonWrap'>
                <SideLink to='/detailPrograms'>
                  <button className='middleVidio-button'>Curso</button>
                </SideLink>
              </div>            </div>
          </div>
        </div>
      </VidioWrapper>
    </HomeWrapper>
  )
}

export default Home
