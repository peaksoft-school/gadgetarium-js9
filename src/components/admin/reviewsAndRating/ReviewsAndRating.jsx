import { Box, Tab, Tabs, styled } from '@mui/material'
import { useState } from 'react'
import AdminFeedback from '../feedback/AdminFeedback'
import { AdminTablesHead } from './AdminTablesHead'
import { CustomTabPanel } from './CustomTabPanel'
import { a11yProps } from '../../../utils/helpers/a11yProps'
import { Infographic } from '../infographic/Infographic'

export const ReviewsAndRating = () => {
   const [valueTabs, setValueTabs] = useState(0)

   const handleChange = (_, newValue) => {
      setValueTabs(newValue)
   }

   const arr = [
      {
         reviewId: '1',
         grade: 3,
         productImage: 'img',
         comment: 'Suuu',
         userFullName: 'Daniel',
         productName: 'Phone',
         brandName: 'Модель',
         images: [],
         dateOfCreatAd: '20.06.22 - 14:15',
         userEmail: 'daniel@gmail.com',
         art: '1212121212',
         userAvatar: '',
         imageLink: '',
         viewed: true,
      },
   ]

   return (
      <Container>
         <ContainerMyContent>
            <div>
               <BoxStyle sx={{ width: '100%' }}>
                  <Box>
                     <Tabs value={valueTabs} onChange={handleChange}>
                        <Tab label="Bce отзывы" {...a11yProps(0)} />
                        <Tab
                           label={
                              <span>
                                 Неотвеченные{' '}
                                 <span className="count">+{6}</span>
                              </span>
                           }
                           {...a11yProps(1)}
                        />
                        <Tab label="Отвеченные" {...a11yProps(2)} />
                     </Tabs>
                  </Box>
                  <CustomTabPanel value={valueTabs} index={0}>
                     <ContainerTable>
                        <div>
                           <AdminTablesHead />
                        </div>

                        <div>
                           {arr.map((item, i) => {
                              const index = i + 1

                              return (
                                 <div key={item.reviewId}>
                                    <AdminFeedback
                                       index={index}
                                       id={item.reviewId}
                                       stars={item.grade}
                                       userText={item.comment}
                                       userName={item.userFullName}
                                       modelName={item.brandName}
                                       images={item.images}
                                       time={item.dateOfCreatAd}
                                       userEmail={item.userEmail}
                                       art={item.art}
                                       productImage={item.productImage}
                                       productName={item.productName}
                                       userAvatar={item.userAvatar}
                                       imageLink={item.imageLink}
                                       viewed={item.viewed}
                                    />
                                 </div>
                              )
                           })}
                        </div>
                     </ContainerTable>
                  </CustomTabPanel>
                  <CustomTabPanel value={valueTabs} index={1}>
                     Item Two
                  </CustomTabPanel>
                  <CustomTabPanel value={valueTabs} index={2}>
                     Item Three
                  </CustomTabPanel>
               </BoxStyle>
            </div>
         </ContainerMyContent>

         <Infographic />
      </Container>
   )
}

const Container = styled('div')`
   padding: 0 6.25rem;
   display: flex;
   gap: 5.75rem;
   margin-top: 2.5rem;
`

const ContainerMyContent = styled('div')`
   display: flex;
   flex-direction: column;
`

const ContainerTable = styled('div')`
   display: flex;
   flex-direction: column;
   margin-top: 2.5rem;
   gap: 0.75rem;
`

const BoxStyle = styled(Box)`
   .MuiBox-root {
      padding: 0;
   }

   .MuiTab-root.Mui-selected {
      background-color: #cb11ab;
      color: #fff;
      font-size: 1rem;
   }

   .count {
      color: #2fc509;
   }

   .MuiTab-root {
      border-radius: 0.25rem;
      color: #384255;
      min-height: 0;
      background-color: #e0e2e7;
      padding: 0.5rem 1.25rem 0.5rem 1.25rem;
      text-transform: none;
      font-size: 1rem;
   }

   .MuiTabs-root {
      min-height: auto;
   }

   .MuiTabs-indicator {
      display: none;
   }

   .MuiTabs-flexContainer {
      display: flex;
      gap: 0.75rem;
   }
   .MuiTypography-root {
      font-family: Inter;
      font-size: 1rem;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
   }
`

// index = 1,
// stars,
// userText,
// userName,
// modelName,
// images = imagesArray,
// time,
// userEmail,

/*
<div>
{arr.map((item, i) => {
   const index = i + 1

   return (
      <div key={item.id}>
         <AdminFeedback
            index={index}
            stars={item.stars}
            userText={item.userText}
            userName={item.userName}
            modelName={item.modelName}
            images={item.images}
            time={item.time}
            userEmail={item.userEmail}
            art={item.art}
         />
      </div>
   )
})}
</div>
*/
