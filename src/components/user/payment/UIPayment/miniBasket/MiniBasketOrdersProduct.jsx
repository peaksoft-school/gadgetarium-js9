import { styled } from '@mui/material'
import { useSelector } from 'react-redux'

export const MiniBasketOrdersProduct = () => {
   const { basketResponses } = useSelector((state) => state.basket)

   return (
      <Container>
         {basketResponses?.map((item) => {
            return (
               <Box key={item.subProductId}>
                  <ContainerImage>
                     <img src={item.image} alt="Photos" />
                  </ContainerImage>

                  <ContainerInfoText>
                     <p className="title">{item.title}</p>
                     <p>Артикул: {item.articleNumber}</p>
                     <p>Кол-во: {item.quantity} шт.</p>
                     <p>Цвет: {item.color} </p>
                  </ContainerInfoText>
               </Box>
            )
         })}
      </Container>
   )
}

const Container = styled('div')`
   max-height: 229px; // специально сделал px

   overflow: auto;

   ::-webkit-scrollbar {
      width: 0.5rem;
   }

   ::-webkit-scrollbar-track {
      background: transparent;
   }

   ::-webkit-scrollbar-thumb {
      background-color: transparent;
      border: none;
   }
`

const Box = styled('div')`
   display: flex;
   gap: 1.3rem;
   margin-top: 1rem;

   padding-bottom: 1rem;

   border-bottom: 1px solid #cdcdcd;

   :last-child {
      border: none;
   }
`

const ContainerImage = styled('div')`
   width: 74.2px;
   height: 84.7px;

   img {
      width: 100%;
      height: 100%;
   }
`

const ContainerInfoText = styled('div')`
   font-family: Inter;
   color: #384255;

   p {
      margin: 0;
   }

   .title {
      color: #292929;
      font-size: 1.125rem;
      font-style: normal;
      font-weight: 400;
      line-height: 150%;
   }

   p {
      font-size: 0.875rem;
      font-style: normal;
      font-weight: 400;
      line-height: 140%;
   }
`
