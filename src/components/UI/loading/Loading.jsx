import { styled } from '@mui/material'
import { useState } from 'react'

export const Loading = () => {
   const [color, setColor] = useState(false)
   const toggleColor = () => {
      setColor(!color)
   }
   return (
      <Container state={color}>
         <GIcons onClick={toggleColor}>G</GIcons>
         <span>a</span>
         <span>d</span>
         <span>g</span>
         <span>e</span>
         <span>t</span>
         <span>a</span>
         <span>r</span>
         <span>i</span>
         <span>u</span>
         <span>m</span>
      </Container>
   )
}
const Container = styled('div')`
   height: 100vh;
   position: fixed;
   z-index: 9999;
   right: 0;
   bottom: 0;
   top: 0;
   left: 0;
   background-color: rgba(0, 0, 0, 0.5);
   display: flex;
   align-items: center;
   justify-content: center;
   backdrop-filter: blur(0.26041666vw);
   span {
      opacity: 0;
      font-size: 1.770833vw;
      color: ${(props) => (props.state ? '#000000' : '#fff')};
      font-family: Orbitron;
      animation: appear 1500ms forwards infinite;
   }

   @keyframes appear {
      from {
         opacity: 0;
         transform: translateY(1.851851851vh);
      }
      to {
         opacity: 1;
         transform: translateY(0);
      }
   }
   span:nth-child(2) {
      margin-left: 0.15625vw;
      animation-delay: 0.2s;
   }
   span:nth-child(3) {
      animation-delay: 0.3s;
   }
   span:nth-child(4) {
      animation-delay: 0.4s;
   }
   span:nth-child(5) {
      animation-delay: 0.5s;
   }
   span:nth-child(6) {
      animation-delay: 0.6s;
   }
   span:nth-child(7) {
      animation-delay: 0.7s;
   }
   span:nth-child(8) {
      animation-delay: 0.8s;
   }
   span:nth-child(9) {
      animation-delay: 0.9s;
   }
   span:nth-child(10) {
      animation-delay: 1s;
   }
`
const GIcons = styled('p')`
   cursor: pointer;
   font-size: 2.08333vw;
   width: 2.60416666vw;
   height: 2.60416666vw;
   text-align: center;
   font-weight: 700;
   font-family: Outfit;
   color: #fff;
   background: #cb11ab;
   animation: appear 1500ms forwards infinite;
`
