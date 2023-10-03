import { styled, Rating as RatingMui } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from '../../components/UI/Button'
import { LeaveYourFeedback } from './LeaveYourFeedback'
import { getReviwesProduct } from '../../store/informationPhone/infoPageThunk'
import { AuthorizationModal } from '../../components/user/AuthorizationModal'

export const Rating = ({ subProductId }) => {
   const { rating, totalReviews, five, four, three, two, one } = useSelector(
      (state) => state.product.getReviews
   )
   const { reviews } = useSelector((state) => state.product.infoPhone)
   const { isAuthorization, role } = useSelector((state) => state.auth)

   const [authorizationModalOpen, setAuthorizationModalOpen] = useState(false)

   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(getReviwesProduct(subProductId))
   }, [])

   const [ratings, setRating] = useState(false)

   const onOpenNodal = () => {
      if (!isAuthorization) {
         setAuthorizationModalOpen(true)
      } else {
         setRating(true)
      }
   }

   const onClose = () => {
      setRating(false)
   }
   const addedComment = reviews?.some((el) => el.my === true)

   return (
      <div>
         <Container>
            <BoxInfoRating>
               <ContainerGeneralRating>
                  <BoxGeneralRating>
                     <RaitingHeader>{rating?.toFixed(0)}</RaitingHeader>
                     <RatingMuiStyle
                        value={rating || 0}
                        readOnly
                        size="small"
                     />
                  </BoxGeneralRating>
                  <span>{totalReviews} отзывов</span>
               </ContainerGeneralRating>
               <ContainerInfoStar>
                  <div className="star-box">
                     <RatingMuiStyle value={5} readOnly size="small" />
                     <span>{five} отзывов</span>
                  </div>
                  <div className="star-box">
                     <RatingMuiStyle value={4} readOnly size="small" />
                     <span>{four} отзывов</span>
                  </div>
                  <div className="star-box">
                     <RatingMuiStyle value={3} readOnly size="small" />
                     <span>{three} отзывов</span>
                  </div>
                  <div className="star-box">
                     <RatingMuiStyle value={2} readOnly size="small" />
                     <span>{two} отзывов</span>
                  </div>
                  <div className="star-box">
                     <RatingMuiStyle value={1} readOnly size="small" />
                     <span>{one} отзывов</span>
                  </div>
               </ContainerInfoStar>
            </BoxInfoRating>

            {role === 'USER' && !addedComment ? (
               <Button
                  variant="contained"
                  padding="0.75rem"
                  onClick={onOpenNodal}
               >
                  Оставить отзыв
               </Button>
            ) : null}

            {authorizationModalOpen && (
               <AuthorizationModal
                  openModal={authorizationModalOpen}
                  toggleHandler={() => setAuthorizationModalOpen(false)}
               />
            )}

            <LeaveYourFeedback
               subProductId={subProductId}
               rating={ratings}
               onClose={onClose}
            />
         </Container>
      </div>
   )
}

const Container = styled('div')(({ theme }) => ({
   padding: '1.88rem 2.5rem',
   display: 'flex',
   flexDirection: 'column',
   gap: '1.25rem',
   backgroundColor: '#f4f4f4',
   width: '26rem',
   borderRadius: '0.375rem',

   fontFamily: theme.typography.mainFontFamily,
}))

const ContainerGeneralRating = styled('div')(({ theme }) => ({
   display: 'flex',
   flexDirection: 'column',
   gap: '0.38rem',

   span: {
      color: theme.palette.secondary.contrastText,
      fontSize: '0.875rem',
   },
}))

const BoxGeneralRating = styled('div')`
   display: flex;
   align-items: center;
   gap: 0.5rem;
`

const BoxInfoRating = styled('div')`
   display: flex;
   justify-content: space-between;

   font-size: 0.875rem;
   color: #292929;
`

const ContainerInfoStar = styled('div')(() => ({
   '.star-box': {
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem',
   },
}))

const RatingMuiStyle = styled(RatingMui)`
   .MuiRating-icon {
      color: #faaf00;
   }
`
const RaitingHeader = styled('p')`
   color: #292929;
   font-family: Inter;
   font-size: 1.875rem;
   font-weight: 700;
`
