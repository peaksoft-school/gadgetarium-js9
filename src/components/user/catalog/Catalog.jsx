import { styled } from '@mui/material'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Category } from './Category'
import { Products } from './Products'
import { ReactComponent as Strelka } from '../../../assets/icons/arrows/up-icon.svg'
import { categoryActions } from '../../../store/cataog/catalogSlice'
import { ReactComponent as Cancel } from '../../../assets/icons/cross/small-cross-icon.svg'
import { Button } from '../../UI/Button'
import { sendSelectedCategories } from '../../../store/cataog/categoryThunk'

export const Catalog = () => {
   const {
      selectedCategories,
      brandsId,
      filteredProducts,
      pageSize,
      showMore,
      plusPageSize,
   } = useSelector((state) => state.category)
   const dispatch = useDispatch()

   const deleteCancel = (id) => {
      dispatch(categoryActions.deleteItem(id))
   }

   const showMoreHandler = () => {
      dispatch(categoryActions.setPageSize(pageSize + 8))
      dispatch(categoryActions.setPlusPageSize(8))
   }

   const showLessHandler = () => {
      dispatch(categoryActions.setPageSize(pageSize - plusPageSize))
   }

   useEffect(() => {
      const dataCategory = {
         id: brandsId,
         pageSize,
         pageNumber: 1,
      }
      dispatch(sendSelectedCategories(dataCategory))
   }, [pageSize])
   useEffect(() => {
      if (pageSize > filteredProducts.length) {
         dispatch(categoryActions.setShowMore(false))
      } else if (pageSize === filteredProducts.length) {
         dispatch(categoryActions.setShowMore(true))
      } else if (pageSize < filteredProducts.length) {
         dispatch(categoryActions.setShowMore(true))
      }
   }, [pageSize, filteredProducts])
   return (
      <Conteiner>
         <SecondContainer>
            <h1>Cмартфоны</h1>
            <Container>
               <ToolContainer>
                  <HeaderTitle>
                     Найдено {filteredProducts.length} товаров
                  </HeaderTitle>
                  <SortingContainer>
                     <FilterContainerTitle>
                        {selectedCategories?.map((el) => {
                           return (
                              <Title key={el.id}>
                                 {el.name}
                                 <CancelStyled
                                    onClick={() => deleteCancel(el.id)}
                                 />
                              </Title>
                           )
                        })}
                     </FilterContainerTitle>
                     <Sorting>
                        Сортировать <Strelka className="strelka" />
                     </Sorting>
                  </SortingContainer>
               </ToolContainer>
               <ProductContainer>
                  <Content>
                     <Category />
                  </Content>
                  <SecondProductsContainer>
                     <Products />
                     <ButtonContainer>
                        {filteredProducts?.length >= 12 && showMore && (
                           <ButtonStyled
                              padding="0.78240740vh 4.983073vw"
                              variant="outlined"
                              backgroundhover="#CB11AB"
                              backgroundactive="#E313BF"
                              onClick={showMoreHandler}
                           >
                              Показать ещё
                           </ButtonStyled>
                        )}
                        {filteredProducts?.length >= 12 && !showMore && (
                           <ButtonStyled
                              padding="0.78240740vh 4.983073vw"
                              variant="outlined"
                              backgroundhover="#CB11AB"
                              backgroundactive="#E313BF"
                              onClick={showLessHandler}
                           >
                              Скрыть
                           </ButtonStyled>
                        )}
                     </ButtonContainer>
                  </SecondProductsContainer>
               </ProductContainer>
            </Container>
         </SecondContainer>
      </Conteiner>
   )
}
const ButtonStyled = styled(Button)`
   margin-top: 3.7037vh;
`
const SecondProductsContainer = styled('div')`
   display: flex;
   flex-direction: column;
   align-items: center;
`
const Conteiner = styled('div')`
   width: 100%;
   display: flex;
   justify-content: center;
`
const ButtonContainer = styled('div')`
   margin-top: 3.7037vh;
   margin-bottom: 11.1111vh;
`
const SecondContainer = styled('div')`
   width: 79.688vw;
   margin-top: 1.88rem;

   h1 {
      font-family: Ubuntu;
      margin: 0;
      border-bottom: 0.0625rem solid #cdcdcd;
      font-size: 1.875rem;
      font-style: normal;
      font-weight: 500;
      line-height: 110%;
      padding-bottom: 1.25rem;
      margin-bottom: 2.5rem;
   }
`
const ToolContainer = styled('div')`
   display: flex;
   width: 100%;
   justify-content: space-between;
`
const HeaderTitle = styled('h5')`
   font-size: 14px;
   font-style: normal;
   font-weight: 400;
   line-height: 130%;
   display: inline-block;
   margin-bottom: 1.12rem;
   margin-top: 14px;
`
const SortingContainer = styled('div')`
   display: flex;
   justify-content: space-between;
   align-items: center;
   width: 59.375vw;
`
const Content = styled('div')`
   padding: 1.875rem;
   padding-right: 1.375rem;
   height: 139.4444vh;
   flex-shrink: 0;
   border-radius: 0.25rem 0rem 0rem 0.25rem;
   overflow-y: scroll;
   ::-webkit-scrollbar {
      height: 130px;
   }
   ::-webkit-scrollbar-track {
      height: 130px;
   }
   ::-webkit-scrollbar-corner {
      height: 130px;
   }
   ::-webkit-scrollbar-track-piece {
      height: 130px;
   }
`

const Container = styled('div')(({ theme }) => ({
   display: 'flex',
   flexDirection: 'column',
   // gap: ' 1.771vw',
   justifyContent: 'space-between',
   fontFamily: theme.typography.mainFontFamily,
}))
const ProductContainer = styled('div')`
   display: flex;
   justify-content: space-between;
`
const Title = styled('p')`
   gap: 0.521vw;
   display: flex;
   height: 2.964vh;
   color: #292929;
   align-items: center;
   font-size: 0.729166vw;
   background: #e8e8e8;
   border-radius: 0.25rem;
   box-sizing: border-box;
   padding: 0.375rem 0.625rem;
   border: 1px solid #cdcdcd;
`

const FilterContainerTitle = styled('div')`
   display: flex;
   gap: 0.625vw;
`
const CancelStyled = styled(Cancel)`
   margin: 0;
   padding: 0;
   width: 0.521vw;
   height: 0.521vw;
   margin-top: 0.1852vh;
   path {
      fill: #292929;
   }
`
const Sorting = styled('div')`
   display: flex;
   align-items: center;
   gap: 9px;
   color: #384255;
   font-size: 16px;
   font-style: normal;
   font-weight: 400;
   line-height: 130%;
   .strelka {
      transform: rotate(180deg);
   }
`
