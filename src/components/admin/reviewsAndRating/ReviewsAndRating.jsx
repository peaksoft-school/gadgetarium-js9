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
import { Loading } from '../../UI/loading/Loading'

export const ReviewsAndRating = () => {
   const dispatch = useDispatch()
   const [valueTabs, setValueTabs] = useState(0)
   const [page, setPage] = useState(1)
   const { allReviews, unanswered, answered, isLoading } = useSelector(
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
      valueTabs === 0 ? allReviews : valueTabs === 1 && unanswered
   const dataReviewsTwo = valueTabs === 2 ? answered : dataReviewsOne

   const dataReviewsThree = valueTabs === 0 ? allReviews : answered
   const dataReviewsFour = count ? dataReviewsTwo : dataReviewsThree

   const mathRes = dataReviewsFour?.count ? dataReviewsFour?.count : 0
   const paginationCount = Math.ceil(mathRes / 4)

   const a11yPropsValid = count ? 2 : 1

   return (
      <>
         {isLoading && <Loading />}
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
                                    {...a11yProps(a11yPropsValid)}
                                 />
                              </Tabs>
                           </Box>
                           <CustomTabPanel value={valueTabs} index={valueTabs}>
                              <ContainerTable>
                                 {dataReviewsFour.reviews?.length > 0 ? (
                                    <>
                                       <AdminTablesHead />
                                       <div>
                                          {dataReviewsFour?.reviews?.map(
                                             (item, i) => {
                                                const index = i + 1

                                                return (
                                                   <div key={item.reviewId}>
                                                      <AdminFeedback
                                                         index={index}
                                                         id={item.reviewId}
                                                         stars={item.grade}
                                                         userText={item.comment}
                                                         userName={
                                                            item.userFullName
                                                         }
                                                         modelName={
                                                            item.brandName
                                                         }
                                                         images={item.images}
                                                         time={
                                                            item.dateOfCreatAd
                                                         }
                                                         userEmail={
                                                            item.userEmail
                                                         }
                                                         art={
                                                            item.articleNumber
                                                         }
                                                         productImage={
                                                            item.productImage
                                                         }
                                                         productName={
                                                            item.productName
                                                         }
                                                         userAvatar={
                                                            item.userAvatar
                                                         }
                                                         imageLink={
                                                            item.imageLink
                                                         }
                                                         viewed={item.viewed}
                                                         answer={item.answer}
                                                         page={page}
                                                      />
                                                   </div>
                                                )
                                             }
                                          )}
                                       </div>
                                       <BoxPagination>
                                          <Pagination
                                             count={paginationCount}
                                             onChange={getNumPage}
                                             color="primary"
                                          />
                                       </BoxPagination>
                                    </>
                                 ) : (
                                    <Title>Здесь нет отзывов!</Title>
                                 )}
                              </ContainerTable>
                           </CustomTabPanel>
                        </BoxStyle>
                     </div>
                  </ContainerMyContent>

                  <Infographic />
               </Container>
            </WidthContainer>
         </AllContainer>
      </>
   )
}

const AllContainer = styled('div')`
   width: 100%;
   display: flex;
   justify-content: center;
   margin-bottom: 14rem;
`
const Title = styled('p')`
   font-size: 20px;
   width: 66.927vw;
   font-family: Inter;
   color: #384255;
   text-align: center;
   margin: 0;
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
      font-family: Inter;
      color: #fff;
   }

   .count {
      color: #2fc509;
   }

   .MuiTab-root {
      font-family: Inter;
      border-radius: 0.25rem;
      color: #384255;
      min-height: 0;
      font-weight: 600;
      background-color: #e0e2e7;
      padding: 0.5rem 1.25rem 0.5rem 1.25rem;
      text-transform: none;
      font-size: 0.833vw;
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
`
