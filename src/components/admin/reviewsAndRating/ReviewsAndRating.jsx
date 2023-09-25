import { Box, Pagination, Tab, Tabs, styled } from '@mui/material'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AdminFeedback from '../feedback/AdminFeedback'
import { AdminTablesHead } from './AdminTablesHead'
import { CustomTabPanel } from './CustomTabPanel'
import { a11yProps } from '../../../utils/helpers/a11yProps'
import { Infographic } from '../infographic/Infographic'
import {
   getAllReviews,
   getAnsweredReviews,
   getUnansweredReviews,
} from '../../../store/reviews/reviews.thunk'

export const arr = {
   count: 6,
   reviews: [
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
      {
         reviewId: '2',
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
      {
         reviewId: '3',
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
      {
         reviewId: '4',
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
      {
         reviewId: '5',
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
   ],
}

export const ReviewsAndRating = () => {
   const dispatch = useDispatch()
   const [valueTabs, setValueTabs] = useState(0)
   const [page, setPage] = useState(1)
   const { allReviews, unanswered, answered } = useSelector(
      (state) => state.reviews
   )

   const handleChange = (_, newValue) => {
      setValueTabs(newValue)
   }

   useEffect(() => {
      dispatch(getAllReviews(page))
      dispatch(getUnansweredReviews(page))
      dispatch(getAnsweredReviews(page))
   }, [valueTabs, page])

   const getNumPage = (e, page) => {
      setPage(page)
   }

   const count = unanswered?.count !== 0

   const dataReviewsOne =
      valueTabs === 0 ? allReviews : valueTabs === 2 && unanswered

   const dataReviewsTwo = valueTabs === 1 ? answered : dataReviewsOne
   const mathRes = dataReviewsTwo?.count
   const paginationCount = Math.ceil(mathRes / 4)

   return (
      <AllContainer>
         <WidthContainer>
            <Container>
               <ContainerMyContent>
                  <div>
                     <BoxStyle sx={{ width: '100%' }}>
                        <Box>
                           <Tabs value={valueTabs} onChange={handleChange}>
                              <Tab label="Bce отзывы" {...a11yProps(0)} />
                              {count && (
                                 <Tab
                                    label={
                                       <span>
                                          Неотвеченные{' '}
                                          <span className="count">
                                             +{unanswered?.count}
                                          </span>
                                       </span>
                                    }
                                    {...a11yProps(1)}
                                 />
                              )}
                              <Tab
                                 label="Отвеченные"
                                 {...a11yProps(count ? 2 : 1)}
                              />
                           </Tabs>
                        </Box>
                        <CustomTabPanel value={valueTabs} index={valueTabs}>
                           <ContainerTable>
                              <div>
                                 <AdminTablesHead />
                              </div>

                              <div>
                                 {dataReviewsTwo?.reviews?.map((item, i) => {
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
                                             art={item.articleNumber}
                                             productImage={item.productImage}
                                             productName={item.productName}
                                             userAvatar={item.userAvatar}
                                             imageLink={item.imageLink}
                                             viewed={item.viewed}
                                             answer={item.answer}
                                          />
                                       </div>
                                    )
                                 })}
                              </div>
                           </ContainerTable>
                        </CustomTabPanel>
                     </BoxStyle>
                  </div>
               </ContainerMyContent>

               <Infographic />
            </Container>

            <BoxPagination>
               <Pagination
                  count={paginationCount}
                  onChange={getNumPage}
                  color="primary"
               />
            </BoxPagination>
         </WidthContainer>
      </AllContainer>
   )
}

const AllContainer = styled('div')`
   width: 100%;
   display: flex;
   justify-content: center;
   margin-bottom: 14rem;
`
const WidthContainer = styled('div')`
   width: 89.583vw;
`
const Container = styled('div')`
   display: flex;
   justify-content: space-between;
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

const BoxPagination = styled('div')`
   display: flex;
   justify-content: center;
   margin-left: -6rem;
`
