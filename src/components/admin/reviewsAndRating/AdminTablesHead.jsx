import { Menu, MenuItem, Rating, styled } from '@mui/material'
import { useState, useEffect } from 'react'
import { ReactComponent as ArrowDown } from '../../../assets/icons/arrows/down-icon.svg'
import { headTable } from '../../../utils/common/constants/reviewsAndRating'
import { getAllRatingCountRequest } from '../../../api/reviewsAdmin.service'

export const AdminTablesHead = () => {
   const [anchorEl, setAnchorEl] = useState(null)
   const [ratingData, setRatingData] = useState({})

   const open = Boolean(anchorEl)

   const handleClick = (event) => {
      setAnchorEl(event.currentTarget)
   }

   const handleClose = () => {
      setAnchorEl(null)
   }

   const getAllRating = async () => {
      try {
         const response = await getAllRatingCountRequest()

         return setRatingData(response.data)
      } catch (error) {
         return new Error(error)
      }
   }

   useEffect(() => {
      getAllRating()
   }, [])

   return (
      <div>
         <Container>
            {headTable.map((item) => {
               return (
                  <BoxContent key={item.id} width={item.width}>
                     <p>{item.title}</p>
                  </BoxContent>
               )
            })}
            <AllStar id="fade-button" onClick={handleClick}>
               <p>Bce оценки ({ratingData?.totalReviews})</p>

               <div>
                  <ArrowDownStyle />
               </div>
            </AllStar>

            <div>
               <MenuStyle
                  id="fade-menu"
                  MenuListProps={{
                     'aria-labelledby': 'fade-button',
                  }}
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
               >
                  <MenuItemStyle onClick={handleClose}>
                     <BoxRating>
                        <StyledRating name="read-only" value={1} readOnly />
                        <span>({ratingData?.one})</span>
                     </BoxRating>
                  </MenuItemStyle>
                  <MenuItemStyle onClick={handleClose}>
                     <BoxRating>
                        <StyledRating name="read-only" value={2} readOnly />
                        <span>({ratingData?.two})</span>
                     </BoxRating>
                  </MenuItemStyle>
                  <MenuItemStyle onClick={handleClose}>
                     <BoxRating>
                        <StyledRating name="read-only" value={3} readOnly />
                        <span>({ratingData?.three})</span>
                     </BoxRating>
                  </MenuItemStyle>
                  <MenuItemStyle onClick={handleClose}>
                     <BoxRating>
                        <StyledRating name="read-only" value={4} readOnly />
                        <span>({ratingData?.four})</span>
                     </BoxRating>
                  </MenuItemStyle>
                  <MenuItemStyle onClick={handleClose}>
                     <BoxRating>
                        <StyledRating name="read-only" value={5} readOnly />
                        <span>({ratingData?.five})</span>
                     </BoxRating>
                  </MenuItemStyle>
               </MenuStyle>
            </div>

            <BoxContent>
               <p>Пользователь</p>
            </BoxContent>
         </Container>
      </div>
   )
}

const Container = styled('div')`
   display: flex;

   p {
      margin: 0;

      color: #384255;
      font-family: Inter;
      font-size: 14px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
   }
`

const BoxContent = styled('div')(({ width }) => ({
   width,
   display: 'flex',
   gap: '0.375rem',
}))

const AllStar = styled('div')(() => ({
   width: '11.2vw',
   display: 'flex',
   gap: '0.375rem',
   alignItems: 'center',

   cursor: 'pointer',
}))

const ArrowDownStyle = styled(ArrowDown)`
   path {
      fill: #384255;
   }
`

const MenuStyle = styled(Menu)`
   .MuiPaper-root {
      /* width: 7vw; */
      padding: 0;

      display: flex;
      flex-direction: column;
      align-items: center;
   }
`

const MenuItemStyle = styled(MenuItem)`
   padding: 0.3125rem 0.625rem;

   :focus {
      background-color: transparent;
   }
`

const BoxRating = styled('div')`
   display: flex;
   align-items: center;
   gap: 2px;
`

const StyledRating = styled(Rating)`
   & .MuiSvgIcon-root {
      font-size: 1.4rem;
   }

   & .MuiRating-iconEmpty {
      color: #faaf00;
   }
`
