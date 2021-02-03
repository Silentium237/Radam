import React from 'react';
import '../Button.css'
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import maxpump from "../../images/maxpump.jpg";

// export const ServicesContainer = styled.div`
//     margin-top: 200px;
//     // height: 300px;
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
//     background: #010606;
//
//     @media screen and (max-width: 768px) {
//         height: 1100px;
//         margin-top: 1300px;
//     }
//     @media screen and (max-width: 480px) {
//         height: 1300px;
//         margin-top: 1300px;
//
// }
// `
export const ServicesWrapper = styled.div`
    margin-top: 500px;
    max-width: 100%;
    height: 1000px; 
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    display: grid;
  grid-template-areas: "post-1 post-1 post-1"  
                       "post-2 post-2 post-2"  
                       "post-3 post-3 post-3"; 
  grid-template-rows: repeat(3, 200px);
  grid-template-columns: repeat(3, 1fr);
    align-items: center;
    grid-gap: 16px;
    padding: 0 50px;

    @media screen and (max-width: 1000px) {
    grid-template-areas: "post-1 post-1 "  
                       "post-2 post-2 "  
                       "post-3 post-3 "; 
        grid-template-columns: 1fr 1fr;
    }
    @media screen and (max-width: 768px) {
        grid-template-areas: "post-1 "  
                       "post-2 "
                       "post-3 ";
               
        grid-template-columns: 1fr;
        padding: 3px 6px 9px;
        margin-top: 70px;
        max-height: 300px;
        margin-bottom: 50px;
        padding-bottom: 20px;
        
        
    }
`
export const ServicesCard1 = styled.div`
    
    background: #161616;
    display: flex;
    grid-area: post-1;
    flex-direction: column;
    // justify-content: flex-start;
    // align-items: center;
    border-radius: 5px;
    height: 300px;
    max-width: 100%;
    padding: 20px;
  margin-bottom: 10px;
        padding-bottom: 20px;
`
export const ServicesCard2 = styled.div`
    
    background: #161616;
    display: flex;
    grid-area: post-2;
    flex-direction: column;
    // justify-content: flex-start;
    // align-items: center;
    border-radius: 5px;
    height: 300px;
    max-width: 100%;
    padding: 20px;
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
    padding: 20px;
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
    height: 250px;
    width: 450px;
    padding-right: 10px;
    padding-bottom: 10px;
    margin-bottom: 10px;
     @media screen and (max-width: 768px) {
      height: 100px;
    width: 100px;
    }
`
export const ServicesH2 = styled.h2`
    float: right;
    font-size: 1rem;
    color: red;
    padding-right: 10px;
    padding-bottom: 10px;
    margin-bottom: 10px;
`
export const ServicesH3 = styled.h3`
    float: right;
    font-size: 1,1rem;
    color: blue;
    padding-right: 10px;
    padding-bottom: 10px;
    margin-bottom: 10px;
    margin-top: -1000px;
    height: 300px;
    z-index: 0;
`
export default function Marketing() {
    return <h1 className='marketing'>
        {/*<ServicesContainer>*/}

            <ServicesWrapper>

                    <ServicesH3><Link to='/services' className="btn">
                        Назад</Link></ServicesH3>



                <ServicesCard1>

                    <ServicesH2><p><ServicesIcon src={maxpump}/><h1>sssss</h1>От качества и мощности насосной
                        станции пожаротушения зависит эффективность
                        борьбы с огнем. Ее мощность и производительность
                        должна быть достаточной, чтобы закачать в систему необходимое
                        для ликвидации пожара количество воды под нужным напором.
                        Каждая насосная станция пожаротушения имеет два насоса –
                        основной и резервный. В случае отказа или поломки одного насоса,
                        в работу автоматически включается другой. От человека, как правило,
                        не требуется никаких дополнительных действий: насосная станция
                        пожаротушения срабатывает автоматически в ответ на появление возгорания.</p>

                    </ServicesH2>
                </ServicesCard1>

                <ServicesCard2>
                    <ServicesH2><ServicesIcon src={maxpump}/><h1>sssss</h1><p> борьбы с огнем. Ее мощность и производительность
                        должна быть достаточной, чтобы закачать в систему необходимое
                        для ликвидации пожара количество воды под нужным напором.
                        Каждая насосная станция пожаротушения имеет два насоса –
                        основной и резервный. В случае отказа или поломки одного насоса,
                        в работу автоматически включается другой. От человека, как правило,
                        не требуется никаких дополнительных действий: насосная станция
                        пожаротушения срабатывает автоматически в ответ на появление возгорания.Ш,</p>

                    </ServicesH2>
                </ServicesCard2>

            </ServicesWrapper>

    </h1>;
}


// export const HeroContent = styled.div`
//
//   max-width: 1200px;
//   position: absolute;
//   padding: 8px 24px;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//
// `
// export const HeroH1 = styled.h1`
//
// color: #ffff;
//   font-size: 40px;
//   text-align: center;
//     @media screen and (max-width: 768px){
//     font-size: 40px;
//   }
// @media screen and (max-width: 480px){
//   font-size: 32px;
// }
// `
// export const HeroP = styled.p`
// background-position: center;
//   background-size: cover;
//   background-repeat: no-repeat;
// margin-top: 24px;
//   color: #ffff;
//   font-size: 24px;
//   text-align: center;
//   max-width: 600px;
//    @media screen and (max-width: 768px){
//       font-size: 24px;
//   }
// @media screen and (max-width: 480px){
//
//   font-size: 18px;
// }
//
// `
// export const ServicesIcon = styled.img`
//     float: left;
//     height: 100px;
//     width: 100px;
//     padding-right: 10px;
//     padding-bottom: 10px;
//     margin-bottom: 10px;
//
// `

// export default function Marketing() {
//     return (
//         <>
//
//             <h1 className='marketing'>
//
//                 <ServicesIcon scr={pipe}/>
//                 <HeroContent>
//                     <HeroH1> Монтаж насосных станций пожаротушения </HeroH1>
//                     <ServicesIcon scr={pipe}/>
//                     <HeroP><ServicesIcon scr={pipe}/>
//                         От качества и мощности насосной
//                         станции пожаротушения зависит эффективность
//                         борьбы с огнем. Ее мощность и производительность
//                         должна быть достаточной, чтобы закачать в систему необходимое
//                         для ликвидации пожара количество воды под нужным напором.
//                         Каждая насосная станция пожаротушения имеет два насоса –
//                         основной и резервный. В случае отказа или поломки одного насоса,
//                         в работу автоматически включается другой. От человека, как правило,
//                         не требуется никаких дополнительных действий: насосная станция
//                         пожаротушения срабатывает автоматически в ответ на появление возгорания.
//
//                     </HeroP>
//                 </HeroContent>
//                 <Link to='/services'>
//                     <h className="push_button red_push">Назад</h>
//                 </Link>
//
//                 </h1>
//
//         </>
//     );
// }