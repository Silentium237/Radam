import React from 'react';
import styled from 'styled-components';
import Video from '../../video/Videos.mp4';
import preview from '../../images/preview.jpg';

export const VideoBg = styled.video`
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
`
export const HeroContent = styled.div`

  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const HeroH1 = styled.h1`

color: #fff;
  font-size: 48px;
  text-align: center;
    @media screen and (max-width: 768px){
    font-size: 40px;
  }
@media screen and (max-width: 480px){
  font-size: 32px;
}
`
export const HeroP = styled.p`
background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
margin-top: 24px;
  color: #fff;
  font-size: 24px;
  text-align: center;
  max-width: 600px;
   @media screen and (max-width: 768px){
      font-size: 24px;
  }
@media screen and (max-width: 480px){

  font-size: 18px;
}

`
export const Logo = styled.img`
    mix-blend-mode: multiply;
    fill-opacity: 0;
    height: 250px;
    width: 250px;
   
`
export default function Home() {
    return (
        <h1 className='home'>
            <VideoBg autoPlay loop muter src={Video} type='video/mp4'/>
            <HeroContent>
                <HeroH1> Лучшие в своем деле  </HeroH1>
                <HeroP>
                    <p>мы позаботимся о Вашей безопасности</p>
                </HeroP>

                <Logo src={preview}/>
            </HeroContent>

        </h1>
    )
}
