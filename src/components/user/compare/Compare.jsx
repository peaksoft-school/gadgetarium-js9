import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, keyframes, styled } from '@mui/material'
import CheckboxInput from '../../UI/icon.input/CheckboxInput'
import { ReactComponent as DeleteIcon } from '../../../assets/icons/cross/small-cross-icon.svg'
import { CompareProductCard } from './CompareProductCard'
import ColumnTable from './CompareTable'
import { compareActions } from '../../../store/compare/compare.slice'
import {
   deleteAllListProducts,
   getCompare,
   getCountProduct,
   postCompareProduct,
} from '../../../store/compare/compare.thunk'
import { Loading } from '../../UI/loading/Loading'
import ForthButton from '../../UI/icon.button/back.forth.buttons/ForthButton'
import BackButton from '../../UI/icon.button/back.forth.buttons/BackButton'

import { useSnackbar } from '../../../hooks/useSnackbar'
import sammyFinance from '../../../assets/images/sammy-finance-image.png'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { categoryMappings } from '../../../utils/common/constants/compare.constants'

export const Compare = () => {
   const {
      products,
      isLoadingComparison,
      countProducts,
      productName,
      deleteAll,
   } = useSelector((state) => state.compare)
   const { snackbarHandler } = useSnackbar()
   const [startPosition, setStartPosition] = useState(0)
   const [openLeftButton, setOpenLeftButton] = useState({
      open: false,
      count: 0,
   })
   const [isChecked, setIsChecked] = useState(false)

   const dispatch = useDispatch()
   const navigate = useNavigate()
   const changeProductNameToLaptop = () => {
      dispatch(compareActions.getProductNameHandler('Laptop'))
   }
   const changeProductNameToSmartphone = () => {
      dispatch(compareActions.getProductNameHandler('Phone'))
   }
   const changeProductNameToSmartWatch = () => {
      dispatch(compareActions.getProductNameHandler('Smart Watch'))
   }
   const changeProductNameToTablet = () => {
      dispatch(compareActions.getProductNameHandler('Tablet'))
   }
   const toggleIsChecked = () => {
      setIsChecked(!isChecked)
   }
   const deleteHandler = async (id) => {
      dispatch(
         postCompareProduct({
            id,
            addOrDelete: false,
            comparisonState: true,
            pageSize: 0,
            productName,
         })
      )
   }
   const deleteAllHandler = () => {
      dispatch(
         deleteAllListProducts({ deleteAll, productName, snackbarHandler })
      )
   }
   const enterPurchases = () => {
      navigate('/')
   }
   const getArrayLength = () => {
      return products?.length || 0
   }

   const handleScroll = (direction) => {
      if (direction === 'left') {
         setStartPosition(Math.max(0, startPosition - 1))
         if (openLeftButton.count > 0) {
            setOpenLeftButton({
               ...openLeftButton,
               count: openLeftButton.count - 1,
            })
         }
      } else if (direction === 'right') {
         if (startPosition < products.length - 6) {
            setOpenLeftButton({
               open: true,
               count: openLeftButton.count + 1,
            })
            setStartPosition(startPosition + 1)
         }
      }
   }
   useEffect(() => {
      dispatch(getCountProduct())
   }, [])
   useEffect(() => {
      dispatch(getCompare(productName))
   }, [productName])
   useEffect(() => {
      dispatch(compareActions.changeDelete())
   }, [products])
   const visibleItems = products?.slice(startPosition, startPosition + 6)
   const renderForthButton = () => {
      if (products?.length === startPosition + 6) {
         return null
      }
      if (products?.length > 6) {
         return (
            <ForthButtonPosition>
               <StyledForthButton
                  bigButton
                  onClick={() => handleScroll('right')}
               />
            </ForthButtonPosition>
         )
      }
      return null
   }
   return (
      <>
         {isLoadingComparison && <Loading />}
         <Container>
            <WidthContainer>
               <Paragraph count={countProducts?.length}>
                  Сравнение товаров
               </Paragraph>
            </WidthContainer>
            {countProducts?.length > 0 ? (
               <CompareContainer>
                  <SecondWidthContainer>
                     <ButtonContainer>
                        {countProducts.map((el) => {
                           const isCurrentProduct =
                              el.categoryTitle === productName
                           const productButtonProps = {
                              prodname: productName,
                              key: el.categoryTitle,
                              onClick: () => {
                                 switch (el.categoryTitle) {
                                    case 'Phone':
                                       changeProductNameToSmartphone()
                                       break
                                    case 'Tablet':
                                       changeProductNameToTablet()
                                       break
                                    case 'Laptop':
                                       changeProductNameToLaptop()
                                       break
                                    case 'Smart Watch':
                                       changeProductNameToSmartWatch()
                                       break
                                    default:
                                       break
                                 }
                              },
                           }

                           const russianCategory =
                              categoryMappings[el.categoryTitle]

                           return (
                              <StyledButton
                                 {...productButtonProps}
                                 key={el.categoryTitle}
                                 highlighted={
                                    isCurrentProduct ? 'true' : 'false'
                                 }
                              >
                                 {`${russianCategory} (${el.totalCounter})`}
                              </StyledButton>
                           )
                        })}
                     </ButtonContainer>
                     <ToolContainer>
                        <CheckedContainer>
                           <StyledCheckboxInput
                              isChecked={isChecked}
                              onClick={toggleIsChecked}
                           />
                           <p>Показывать только различия</p>
                        </CheckedContainer>
                        <ClearContainer onClick={deleteAllHandler}>
                           <StyledDeleteIcon />
                           <p>Очистить список</p>
                        </ClearContainer>
                     </ToolContainer>
                  </SecondWidthContainer>
                  <Products array={getArrayLength()}>
                     {products?.length > 6 &&
                        openLeftButton.open &&
                        openLeftButton.count !== 0 && (
                           <BackButtonPosition>
                              <StyledBackButton
                                 bigButton
                                 onClick={() => handleScroll('left')}
                              />
                           </BackButtonPosition>
                        )}

                     {visibleItems?.map((el, index) => {
                        return (
                           <StyledCompareProductCard
                              key={el.subProductId}
                              id={el.subProductId}
                              prodName={el.prodName}
                              price={el.price}
                              image={el.image}
                              deleteHandler={deleteHandler}
                              index={index}
                           />
                        )
                     })}
                     {renderForthButton()}
                  </Products>
                  <TableContainer>
                     <ColumnTable
                        productName={productName}
                        isChecked={isChecked}
                        table={visibleItems}
                     />
                  </TableContainer>
               </CompareContainer>
            ) : (
               <VoidContainer>
                  <Image src={sammyFinance} />
                  <VoidTitle>Сравнивать пока нечего</VoidTitle>
                  <VoidParagraph>
                     Добавляйте сюда товары, чтобы сравнить их характеристики.
                     Так выбрать станет проще!
                  </VoidParagraph>
                  <VoidButton variant="contained" onClick={enterPurchases}>
                     К покупкам
                  </VoidButton>
               </VoidContainer>
            )}
         </Container>
      </>
   )
}
const Container = styled('div')`
   display: flex;
   flex-direction: column;
   align-items: center;
`
const VoidButton = styled(Button)`
   font-size: 1rem;
   padding: 11px 21px;
   text-transform: none;
   height: 40px;
   margin-bottom: 11.1111vh;
   :hover {
      background: #e313bf;
   }
   :active {
      background: #cd09ad;
   }
`
const Image = styled('img')`
   width: 15.625vw;
   height: 15.625vw;
   margin-top: 11.1111vh;
`
const VoidTitle = styled('p')`
   color: #292929;
   font-family: Inter;
   font-size: 1.25vw;
   font-style: normal;
   font-weight: 500;
   line-height: 110%;
   margin-top: 2.7778vh;
   margin-bottom: 1.8519vh;
`
const VoidParagraph = styled('p')`
   color: #292929;
   text-align: center;
   font-family: Inter;
   font-size: 0.938vw;
   font-style: normal;
   font-weight: 400;
   line-height: 130%;
   width: 28.906vw;
   margin: 0;
   margin-bottom: 2.2222vh;
`
const VoidContainer = styled('div')`
   display: flex;
   flex-direction: column;
   align-items: center;
`
const StyledForthButton = styled(ForthButton)`
   width: 2.604vw;
   height: 2.604vw;
   svg {
      width: 0.781vw;
      height: 0.677vw;
   }
`
const StyledBackButton = styled(BackButton)`
   width: 2.604vw;
   height: 2.604vw;
   svg {
      width: 0.781vw;
      height: 0.677vw;
   }
`
const WidthContainer = styled('div')`
   width: 79.688vw;
`
const Products = styled('div')`
   display: flex;
   gap: 1.563vw;
   margin-top: 34px;
   width: 100%;
   justify-content: flex-end;
   position: relative;
   padding-left: 9.896vw;
   margin-right: ${(props) => {
      switch (props.array) {
         case 1:
            return '128.5vw'
         case 2:
            return '102.3vw'
         case 3:
            return '76.8vw'
         case 4:
            return '50.3vw'
         case 5:
            return '24.5vw'
         default:
            return '0'
      }
   }};
`
const SecondWidthContainer = styled('div')`
   width: 79.688vw;
`
const TableContainer = styled('div')`
   margin-top: 36px;
   margin-bottom: 40px;
   padding-left: 9.896vw;
   width: 100%;
   box-sizing: border-box;
   display: flex;
   justify-content: flex-start;
`
const StyledCheckboxInput = styled(CheckboxInput)`
   width: 28px;
   height: 28px;
   svg {
      width: 21.5px;
      height: 21.5px;
   }
`
const ForthButtonPosition = styled('div')`
   position: absolute;
   top: 100px;
`
const BackButtonPosition = styled('div')`
   position: absolute;
   z-index: 7;
   top: 100px;
   right: 73.708vw;
`
const ToolContainer = styled('div')`
   display: flex;
   gap: 32px;
   margin-top: 12px;
`
const CheckedContainer = styled('div')`
   display: flex;
   align-items: center;
   p {
      margin: 0;
   }
`
const ClearContainer = styled('div')`
   display: flex;
   align-items: center;
   gap: 0.417vw;
   p {
      margin: 0;
   }
   cursor: pointer;
`
const Paragraph = styled('p')`
   color: #292929;
   font-family: Ubuntu;
   font-size: 1.875rem;
   font-style: normal;
   font-weight: 500;
   line-height: 110%;
   margin-top: 1.875rem;
   margin-bottom: 1.25rem;
   padding-bottom: ${(props) => (props.count === 0 ? '20px' : '0')};
   border-bottom: ${(props) =>
      props.count === 0 ? '1px solid #cdcdcd' : 'none'};
`
const CompareContainer = styled('div')`
   background-color: white;
   width: 100%;
   display: flex;
   flex-direction: column;
   align-items: center;
   margin-bottom: 120px;
`
const ButtonContainer = styled('div')`
   margin-top: 40px;
   display: flex;
   gap: 12px;
`
const StyledButton = styled(Button)`
   background: ${(props) =>
      props.highlighted === 'true' ? '#384255' : 'rgba(144, 156, 181, 0.2)'};
   color: ${(props) => (props.highlighted === 'true' ? 'white' : '#384255')};
   padding: 8px 12px 9px 12px;
   font-family: Inter;
   font-size: 14px;
   font-style: normal;
   font-weight: 700;
   line-height: normal;
   text-transform: none;

   :hover {
      background: #384255;
      color: white;
   }
   :active {
      background: #384255;
      color: white;
   }
`
const StyledDeleteIcon = styled(DeleteIcon)`
   margin-top: 3px;
`
const animation = keyframes`
   from {
      transform: scale(0);
      opacity: 0;
      
   }
   to {
      transform:scale(1);
      opacity: 1;

   }
`
const StyledCompareProductCard = styled(CompareProductCard)`
   animation: alternate ${animation} 1s forwards;
`
