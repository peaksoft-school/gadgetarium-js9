import { styled } from '@mui/material'
import { Box } from '../UIPayment/Box'
import { PersonalData } from './PersonalData'

export const DeliveryOptions = () => {
   const check = true

   return (
      <Container>
         <Title>Варианты доставки</Title>

         <FormContainer>
            <ContainerBox>
               <Box check={check} width="19vw">
                  <BoxContainer>
                     <BoxTitle>
                        <span>Самовывоз из магазина</span>
                     </BoxTitle>

                     <BoxContainerText>
                        <span className="one">Забрать 20 июля,</span>
                        <span className="two">Бесплатно</span>
                     </BoxContainerText>
                  </BoxContainer>
               </Box>

               <Box check={false} width="19vw">
                  <BoxContainer>
                     <BoxTitle>
                        <span>Доставка курьером</span>
                     </BoxTitle>

                     <BoxContainerText>
                        <span className="one">Забрать 20 июля,</span>
                        <span className="two"> Бесплатно свыше 10 000 c</span>
                        <span className="one">до 10 000 c — от 200 c</span>
                     </BoxContainerText>
                  </BoxContainer>
               </Box>
            </ContainerBox>

            <PersonalData />
         </FormContainer>
      </Container>
   )
}

const Container = styled('div')`
   margin-top: 2.375rem;
   color: #292929;
   font-family: Inter;
   font-style: normal;
`

const FormContainer = styled('div')`
   display: flex;
   flex-direction: column;
   gap: 2.5rem;
`

const ContainerBox = styled('div')`
   margin-top: 1.875rem;
   display: flex;
   gap: 1.875rem;

   width: 45.2vw;

   padding-bottom: 2.5rem;
   border-bottom-width: 1;
   border-color: #cdcdcd;
   border-bottom-style: solid;
`

const Title = styled('p')`
   color: #292929;
   font-size: 1.5rem;
   font-weight: 700;
   line-height: 110%;
   margin: 0;
`

const BoxContainer = styled('div')`
   display: flex;
   flex-direction: column;
   gap: 0.625rem;
`

const BoxTitle = styled('div')`
   font-size: 1.125rem;
   font-weight: 700;
   line-height: 130%;
`

const BoxContainerText = styled('div')`
   display: flex;
   flex-direction: column;

   .one {
      font-size: 1rem;
      font-weight: 400;
      line-height: 150%;
   }

   .two {
      font-size: 1rem;
      font-style: normal;
      font-weight: 700;
      line-height: 150%;
   }
`
