import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, styled } from '@mui/material'
import CheckboxInput from '../../UI/icon.input/CheckboxInput'
import { ReactComponent as DeleteIcon } from '../../../assets/icons/cross/small-cross-icon.svg'
import { CompareProductCard } from './CompareProductCard'
import ColumnTable from './CompareTable'
import { compareActions } from '../../../store/compare/compare.slice'
import {
   getCompare,
   getCountProduct,
   postCompareProduct,
} from '../../../store/compare/compare.thunk'
import { Loading } from '../../UI/loading/Loading'
import ForthButton from '../../UI/icon.button/back.forth.buttons/ForthButton'
import { useSnackbar } from '../../../hooks/useSnackbar'

export const Compare = () => {
   const {
      tablets,
      productName,
      laptops,
      smartphone,
      smartWatch,
      isLoading,
      countProducts,
   } = useSelector((state) => state.compare)
   const { snackbarHandler } = useSnackbar()
   const dispatch = useDispatch()
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
   useEffect(() => {
      dispatch(getCompare(productName))
   }, [productName])
   useEffect(() => {
      dispatch(getCountProduct())
   }, [])
   const deleteHandler = async (id) => {
      dispatch(postCompareProduct({ id, addOrDelete: false }))
         .unwrap()
         .then(() => {
            dispatch(getCompare(productName))
            snackbarHandler({
               message: 'Товар успешно удален из сравнения',
            })
         })
         .catch(() => {
            snackbarHandler({
               message: 'Товар не удален из сравнения',
               type: 'error',
            })
         })
   }
   const categoryMappings = {
      Phone: 'Смартфоны',
      Tablet: 'Планшеты',
      Laptop: 'Ноутбуки',
      'Smart Watch': 'Смарт-часы',
   }
   return (
      <>
         {isLoading && <Loading />}
         <Container>
            <WidthContainer>
               <Paragraph>Сравнение товаров</Paragraph>
            </WidthContainer>
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
                              highlighted={isCurrentProduct}
                           >
                              {`${russianCategory} (${el.totalCounter})`}
                           </StyledButton>
                        )
                     })}
                  </ButtonContainer>
                  <ToolContainer>
                     <CheckedContainer>
                        <StyledCheckboxInput />
                        <p>Показывать только различия</p>
                     </CheckedContainer>
                     <ClearContainer>
                        <StyledDeleteIcon />
                        <p>Очистить список</p>
                     </ClearContainer>
                  </ToolContainer>
               </SecondWidthContainer>
               <Products>
                  {(() => {
                     switch (productName) {
                        case 'Smart Watch':
                           return smartWatch?.map((el, index) => {
                              if (index > 5) {
                                 return null
                              }
                              return (
                                 <CompareProductCard
                                    key={el.subProductId}
                                    id={el.subProductId}
                                    prodName={el.prodName}
                                    price={el.price}
                                    image={el.image}
                                    deleteHandler={deleteHandler}
                                 />
                              )
                           })
                        case 'Tablet':
                           return tablets?.map((el, index) => {
                              if (index > 5) {
                                 return null
                              }
                              return (
                                 <CompareProductCard
                                    key={el.subProductId}
                                    id={el.subProductId}
                                    prodName={el.prodName}
                                    price={el.price}
                                    image={el.image}
                                    deleteHandler={deleteHandler}
                                 />
                              )
                           })
                        case 'Laptop':
                           return laptops?.map((el, index) => {
                              if (index > 5) {
                                 return null
                              }
                              return (
                                 <CompareProductCard
                                    key={el.subProductId}
                                    id={el.subProductId}
                                    prodName={el.prodName}
                                    price={el.price}
                                    image={el.image}
                                    deleteHandler={deleteHandler}
                                 />
                              )
                           })
                        default:
                           return smartphone?.map((el, index) => {
                              if (index > 5) {
                                 return null
                              }
                              return (
                                 <CompareProductCard
                                    key={el.subProductId}
                                    id={el.subProductId}
                                    prodName={el.prodName}
                                    price={el.price}
                                    image={el.image}
                                    deleteHandler={deleteHandler}
                                 />
                              )
                           })
                     }
                  })()}
                  <ForthButtonPosition>
                     <StyledForthButton bigButton />
                  </ForthButtonPosition>
               </Products>
               {isLoading ? null : (
                  <TableContainer>
                     <ColumnTable />
                  </TableContainer>
               )}
            </CompareContainer>
         </Container>
      </>
   )
}
const Container = styled('div')`
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
      props.highlighted ? '#384255' : 'rgba(144, 156, 181, 0.2)'};
   color: ${(props) => (props.highlighted ? 'white' : '#384255')};
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
