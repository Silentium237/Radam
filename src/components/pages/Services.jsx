import React from 'react';
import '../../App.css';
import styled from 'styled-components';
import pump5 from '../../images/pump5.jpg'
import truboprovod from '../../images/truboprovod.jpg'
import sprinkler from '../../images/sprinkler.png'
import { Link } from 'react-router-dom';
import pipe from '../../images/pipe.png';
import vent3 from '../../images/vent3.png';
import circl4 from '../../images/circl4.png';

export const ServicesContainer = styled.div`
    margin-top: 0px;
    height: 350px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    // background: #010606;

    @media screen and (max-width: 768px) {
        height: 1100px;
        margin-top: 1300px;
    }
    @media screen and (max-width: 480px) {
        height: 1300px;
        margin-top: 1300px;
}
`
export const ServicesWrapper = styled.div`
    
    max-width: 2000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 3fr 3fr 3fr 3fr 3fr;
    align-items: center;
    grid-gap: 16px;
    padding: 0 50px;

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
    }
    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`
export const ServicesCard = styled.div`
    
    background: #292422;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    max-height: 340px;
    padding: 30px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    transition: all 0.2s ease-in-out;
    
    &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
     }
`
export const ServicesIcon = styled.img`
    
    height: 160px;
    width: 160px;
    margin-bottom: 10px;
`
export const ServicesH1 = styled.h1`
    font-size: 2.5rem;
    color: #fff;
    margin-bottom: 256px;

    @media screen and (max-width: 480px){
        font-size: 2rem;
    }
`
export const ServicesH2 = styled.h2`
    font-size: 1rem;
    color: #295df5;
    margin-bottom: 10px;
`
export const ServicesP = styled.p`
    font-size: 1rem;
    color: black;
    text-align: center;
`

export default function Services() {
    return <h1 className='services'>
        <ServicesContainer>
            {/*<ServicesH1>Наши услуги</ServicesH1>*/}
            <ServicesWrapper>
                <Link to='/marketing'>
                    <ServicesCard>
                        <ServicesIcon src={pump5} />
                        <ServicesH2>Монтаж насосных</ServicesH2>
                        {/*<ServicesP>надежное оборудование от прямых поставщиков</ServicesP>*/}
                    </ServicesCard>
                </Link>

                <ServicesCard>
                    <ServicesIcon src={pipe}/>
                    <ServicesH2>Монтаж трубопроводов</ServicesH2>
                    {/*<ServicesP></ServicesP>*/}
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={sprinkler} />
                    <ServicesH2>Поставка материалов</ServicesH2>
                    <ServicesP></ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={vent3}/>
                    <ServicesH2> Монтаж дымоудаления</ServicesH2>
                    <ServicesP></ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={circl4}/>
                    <ServicesH2>Проектные работы</ServicesH2>
                    <ServicesP></ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    </h1>;
}