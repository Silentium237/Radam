import React from 'react';
import '../../App.css';
import styled from 'styled-components';
import location from '../../images/location.png'
import phone from '../../images/phone.jpg'
import table from '../../images/table.jpg'

export const ServicesContainer = styled.div`
    margin-top: 0px;
    // height: 300px;
    display: flex;
    // flex-direction: column;
    // justify-content: center;
    // align-items: center;
    // background: #010606;

    @media screen and (max-width: 768px) {
        height: 1100px;
        margin-top: 300px;
    }
    @media screen and (max-width: 480px) {
        height: 1300px;
        margin-top: 300px;
        
}
`
export const ServicesWrapper = styled.div`
    
    max-width: 100%;
    margin: 0 auto;
    // display: grid;
    // grid-template-columns: 1fr 1fr 1fr;
    display: grid;
  grid-template-areas: "post-1 post-1 post-1"  
                       "post-2 post-3 post-4"  
                       "post-5 post-5 post-5"; 
  grid-template-rows: repeat(3, 150px);
  grid-template-columns: repeat(3, 1fr);
    align-items: center;
    grid-gap: 16px;
    padding: 0 50px;

    @media screen and (max-width: 1000px) {
    grid-template-areas: "post-1 post-1 "  
                       "post-2 post-3 "  
                       "post-4 post-5 "; 
        grid-template-columns: 1fr 1fr;
    }
    @media screen and (max-width: 768px) {
        grid-template-areas: "post-1 "  
                       "post-2 "
                       "post-3 "
                         "post-4"
                       "post-5 "; 
        grid-template-columns: 1fr;
        padding: 3px 6px 9px;
        margin-top: -300px;
        max-height: 50px;
        margin-bottom: 50px;
        padding-bottom: 20px;
        background-repeat: space;
        
        
    }
`
export const ServicesCard1 = styled.div`
    
    background: #97a4a9;
    display: flex;
    grid-area: post-1;
    flex-direction: column;
    // justify-content: flex-start;
    // align-items: center;
    border-radius: 5px;
    height: 100px;
    max-width: 100%;
    padding: 5px;
  
`
export const ServicesCard2 = styled.div`
    
    background: #97a4a9;
    display: flex;
    grid-area: post-2;
    flex-direction: column;
    // justify-content: flex-start;
    // align-items: center;
    border-radius: 5px;
    height: 200px;
    max-width: 100%;
    padding: 5px;
    margin-bottom: 10px;
        padding-bottom: 20px;
   
`
export const ServicesCard3 = styled.div`
    
    background: #97a4a9;
    display: flex;
    grid-area: post-3;
    flex-direction: column;
    // justify-content: flex-start;
    // align-items: center;
    border-radius: 5px;
    height: 200px;
    max-width: 100%;
    padding: 5px;
    margin-bottom: 10px;
        padding-bottom: 20px;
   
`
export const ServicesCard4 = styled.div`
    
    background: #97a4a9;
    display: flex;
    grid-area: post-4;
    // flex-direction: column;
    // justify-content: flex-start;
    align-items: center;
    border-radius: 5px;
    height: 200px;
    max-width: 100%;
    padding: 5px;
    margin-bottom: 10px;
    padding-bottom: 20px;
 
`
export const ServicesCard5 = styled.div`
    
    background: #97a4a9;
    display: flex;
    grid-area: post-5;
    flex-direction: column;
    // justify-content: flex-start;
    // align-items: center;
    border-radius: 5px;
    height: 100px;
    max-width: 100%;
    padding: 5px;
   
`
export const ServicesIcon = styled.img`
    float: left;
    height: 100px;
    width: 100px;
    padding-right: 10px;
    padding-bottom: 10px;
    margin-bottom: 10px;
`
export const ServicesH2 = styled.h2`
    float: right;
    font-size: 1rem;
    color: black;
    padding-right: 10px;
    padding-bottom: 10px;
    margin-bottom: 10px;
`

export default function ContactUs() {
    return <h1 className='contact-us'>
        <ServicesContainer>
            <ServicesWrapper>
                <ServicesCard1>
                    <ServicesH2><ServicesIcon src={location}/><p>Шоу-рум/магазин: Беларусь 220124,</p>
                        <p>г. Минск, ул. Лынькова 37, корп. 2 Шоу-рум/магазин: Беларусь 220124,Шоу-рум/магазин: Беларусь 220124,</p>
                    </ServicesH2>
                </ServicesCard1>
                <ServicesCard2>
                    <ServicesH2><ServicesIcon src={location}/><p>Шоу-рум/магазин: Беларусь 220124,</p>
                        <p>г. Минск, ул. Лынькова 37, корп. 2</p>
                        <p>Факс: +375 17 370-45-18</p>
                        <p>Заявки на закупку: info@teplodvor.by</p>
                    </ServicesH2>
                </ServicesCard2>
                <div/>
                <ServicesCard3>
                    <ServicesH2><ServicesIcon src={phone}/>
                        <p>Отдел продаж</p>
                        <p>+375 29 6728    mmbmbm nbbn jb</p>
                        <p>+375 29 7728</p>
                        <p>+375 17 370 </p>
                    </ServicesH2>
                </ServicesCard3>
                <ServicesCard4>
                    <ServicesH2><ServicesIcon src={table}/><p>Режим работы</p>
                        <p>+</p>
                        <p>+375 29 7728</p>
                        <p>+375 17 370 </p></ServicesH2>
                </ServicesCard4>
                <ServicesCard5>
                    <ServicesH2><ServicesIcon src={table}/>наши партнеры</ServicesH2>
                </ServicesCard5>
            </ServicesWrapper>
        </ServicesContainer>
    </h1>;
}
