import React from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material'
import { useSelector } from 'react-redux'
import { ReactComponent as Arrow } from '../../../../assets/icons/arrowSlide.svg'

export const Сharacteristics = () => {
   const infoPhone = useSelector((state) => state.product.infoPhone)

   const { brandName, name, rom, screenResolution, category } = infoPhone

   return (
      <Container>
         <Accordion>
            <AccordionSummary expandIcon={<ArrowStyle />}>
               <Title>Основные xарактеристики</Title>
            </AccordionSummary>
            <AccordionDetails>
               <Typography>
                  {category === 'Laptop' ? (
                     <TypographyBlock>
                        <div>
                           <p>Бренд:</p>
                           <p>Название:</p>
                           <p>Экран:</p>
                        </div>
                        <div>
                           <p>{brandName}</p>
                           <p>{name}</p>
                           <p>
                              {screenResolution === null
                                 ? '1520 x 1020'
                                 : screenResolution}
                           </p>
                        </div>
                     </TypographyBlock>
                  ) : null}
                  {category === 'Phone' ? (
                     <TypographyBlock>
                        <div>
                           <p>Бренд:</p>
                           <p>Название:</p>
                           <p>
                              {screenResolution === null
                                 ? 'Расширение экрана'
                                 : screenResolution}
                           </p>
                        </div>
                        <div>
                           <p>{brandName}</p>
                           <p>{name}</p>
                           <p>
                              {screenResolution === null
                                 ? '1520 x 1020'
                                 : screenResolution}
                           </p>
                        </div>
                     </TypographyBlock>
                  ) : null}
                  {category === 'Tablet' ? (
                     <TypographyBlock>
                        <div>
                           <p>Бренд:</p>
                           <p>Название:</p>
                           <p>
                              {screenResolution === null
                                 ? 'Расширение экрана'
                                 : screenResolution}
                           </p>
                        </div>
                        <div>
                           <p>{brandName}</p>
                           <p>{name}</p>
                           <p>
                              {screenResolution === null
                                 ? '1520 x 1020'
                                 : screenResolution}
                           </p>
                        </div>
                     </TypographyBlock>
                  ) : null}
                  {category === 'Smart Watch' ? (
                     <TypographyBlock>
                        <div>
                           <p>Бренд:</p>
                           <p>Название:</p>
                        </div>
                        <div>
                           <p>{brandName}</p>
                           <p>{name}</p>
                        </div>
                     </TypographyBlock>
                  ) : null}
               </Typography>
            </AccordionDetails>
         </Accordion>
         <Accordion>
            <AccordionSummary expandIcon={<ArrowStyle />}>
               <Title>Процессор</Title>
            </AccordionSummary>
            <AccordionDetails>
               <Typography>
                  <TypographyBlock>
                     <div>
                        <p>ОЗУ:</p>
                     </div>
                     <div>
                        <p>{rom}</p>
                     </div>
                  </TypographyBlock>
               </Typography>
            </AccordionDetails>
         </Accordion>
      </Container>
   )
}

const Container = styled('div')`
   margin-top: 4.56rem;
   width: 100%;

   .MuiAccordion-root {
      box-shadow: none;
      width: 58.125rem;
   }
   .MuiButtonBase-root {
      padding: 0 !important;
   }
   .MuiTypography-root {
      line-height: 3rem;
   }
   .MuiAccordionSummary-content {
      margin: 0;
   }
`
const Title = styled('h3')`
   color: #384255;
   font-family: Inter;
   line-height: 120%;
`
const TypographyBlock = styled('div')`
   display: flex;
   justify-content: space-between;
`
const ArrowStyle = styled(Arrow)`
   .my-circle {
      fill: none;
   }
   transform: rotate(-90deg);
`
