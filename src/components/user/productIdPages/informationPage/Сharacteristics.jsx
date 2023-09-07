import React from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material'
import { useSelector } from 'react-redux'
import { ReactComponent as Arrow } from '../../../../assets/icons/arrowSlide.svg'

export const Сharacteristics = () => {
   const { brandName, name, rom, screenResolution, category } = useSelector(
      (state) => state.phone.infoPhone
   )
   return (
      <Container>
         <Accordion>
            <AccordionSummary expandIcon={<ArrowStyle />}>
               <Typography>
                  <h4>Основные xарактеристики</h4>
               </Typography>
            </AccordionSummary>
            <AccordionDetails>
               <Typography>
                  mklmlmlk
                  {category === 'Laptop' && 'Phone' ? (
                     <TypographyBlock>
                        <div>
                           <p>Бренд:</p>
                           <p>Название:</p>
                           <p>Экран:</p>
                        </div>
                        <div>
                           <p>{brandName}</p>
                           <p>{name}</p>
                           <p>{screenResolution}</p>
                        </div>
                     </TypographyBlock>
                  ) : (
                     ''
                  )}
                  {category === 'Phone' ? (
                     <TypographyBlock>
                        <div>
                           <p>Бренд:</p>
                           <p>Название:</p>
                           <p>
                              {screenResolution === null
                                 ? ''
                                 : screenResolution}
                           </p>
                        </div>
                        <div>
                           <p>{brandName}</p>
                           <p>{name}</p>
                           <p>
                              {screenResolution === null
                                 ? ''
                                 : screenResolution}
                           </p>
                        </div>
                     </TypographyBlock>
                  ) : (
                     ''
                  )}
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
                  ) : (
                     ''
                  )}
               </Typography>
            </AccordionDetails>
         </Accordion>
         <Accordion>
            <AccordionSummary expandIcon={<ArrowStyle />}>
               <Typography>
                  <h4>Процессор</h4>
               </Typography>
            </AccordionSummary>
            <AccordionDetails>
               <Typography>
                  <TypographyBlock>
                     <div>
                        <p>ПЗУ</p>
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

   .MuiAccordion-root {
      box-shadow: none;
      width: 58.125rem;
   }
   .MuiTypography-root {
      line-height: 3rem;
   }
   .MuiAccordionSummary-root.Mui-expanded {
      height: 1rem;
      min-height: 1px;
   }
   .MuiAccordionSummary-content {
      margin: 0;
   }
`

const TypographyBlock = styled('div')`
   display: flex;
   width: 40rem;
   justify-content: space-between;
`
const ArrowStyle = styled(Arrow)`
   .my-circle {
      fill: none;
   }
   transform: rotate(-90deg);
`
