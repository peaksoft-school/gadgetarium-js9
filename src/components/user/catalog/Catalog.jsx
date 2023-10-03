import { styled } from '@mui/material'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Products } from './Properties/Products'
import { categoryActions } from '../../../store/cataog/catalogSlice'
import { ReactComponent as Cancel } from '../../../assets/icons/cross/small-cross-icon.svg'
import { Button } from '../../UI/Button'
import { Options } from './Options'
import { ArrowIcon } from '../../UI/Arrow'
import { Sort } from './Sort'
import { BreadCrumbs } from '../../UI/breadCrumbs/BreadCrumbs'

export const Catalog = () => {
   const {
      selectedCategories,
      filteredProducts,
      pageSize,
      showMore,
      plusPageSize,
      sort,
      // items,
   } = useSelector((state) => state.category)

   const [cateSort, setCateSort] = useState(false)
   const dispatch = useDispatch()
   const category = useParams()

   const categoryName = {
      Phone: 'Cмартфоны',
      Laptop: 'Ноутбуки',
      'Smart Watch': 'Смарт-часы и браслеты',
      Tablet: 'Планшеты',
   }

   const getSortType = (value) => {
      if (value === 'По акции') {
         return null
      }
      return dispatch(categoryActions.sort(value))
   }

   const filterProducts = filteredProducts?.responseList

   const openSort = () => {
      setCateSort((prev) => !prev)
   }
   const closeSort = () => {
      setCateSort(false)
   }

   const deleteCancel = (id) => {
      dispatch(categoryActions.deleteItem(id))
   }

   const showMoreHandler = () => {
      dispatch(categoryActions.setPageSize(pageSize + 8))
      dispatch(categoryActions.setPlusPageSize(8))
   }

   const categoryValues = Object.values(category)

   const showLessHandler = () => {
      dispatch(categoryActions.setPageSize(pageSize - plusPageSize))
   }
   useEffect(() => {
      if (pageSize > filterProducts?.length) {
         dispatch(categoryActions.setShowMore(false))
      } else if (pageSize === filterProducts?.length) {
         dispatch(categoryActions.setShowMore(true))
      } else if (pageSize < filterProducts?.length) {
         dispatch(categoryActions.setShowMore(true))
      }
   }, [pageSize, filterProducts])

   return (
      <Conteiner>
         <SecondContainer>
            <BreadCrumbsBox>
               <BreadCrumbs
                  breadcrumbs={[
                     { path: '/', label: 'Главная' },
                     { label: categoryName[categoryValues] },
                  ]}
               />
            </BreadCrumbsBox>

            <h1>{categoryName[categoryValues]}</h1>

            <Container>
               <ToolContainer>
                  <HeaderTitle>
                     Найдено {filteredProducts?.quantity} товаров
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
                     <PositionContainer onMouseLeave={closeSort}>
                        <Sorting onClick={openSort}>
                           Сортировать <ArrowIconStyled />
                        </Sorting>
                        {cateSort && (
                           <Sort
                              onClose={closeSort}
                              sort={sort}
                              getSortType={getSortType}
                              openSort={cateSort}
                           />
                        )}
                     </PositionContainer>
                  </SortingContainer>
               </ToolContainer>

               <ProductContainer>
                  <Options />

                  <SecondProductsContainer>
                     <Products />

                     <ButtonContainer>
                        {filterProducts?.length >= 12 && showMore && (
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

                        {filterProducts?.length >= 12 && !showMore && (
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

const Conteiner = styled('div')`
   width: 100%;
   display: flex;
   justify-content: center;
   margin-bottom: 7.5rem;
`

const BreadCrumbsBox = styled('div')`
   margin-bottom: 1.875rem;
`

const ButtonStyled = styled(Button)`
   margin-top: 3.7037vh;
`

const SecondProductsContainer = styled('div')`
   display: flex;
   align-items: center;
   flex-direction: column;
`

const ButtonContainer = styled('div')`
   margin-top: 3.7037vh;
   margin-bottom: 11.1111vh;
`

const SecondContainer = styled('div')`
   width: 79.688vw;

   h1 {
      margin: 0;
      font-weight: 500;
      line-height: 110%;
      font-style: normal;
      font-family: Ubuntu;
      font-size: 1.875rem;
      margin-bottom: 2.5rem;
      padding-bottom: 1.25rem;
      border-bottom: 0.0625rem solid #cdcdcd;
   }
`

const ToolContainer = styled('div')`
   width: 100%;
   display: flex;
   justify-content: space-between;
`

const HeaderTitle = styled('h5')`
   font-size: 14px;
   margin-top: 14px;
   font-weight: 400;
   line-height: 130%;
   font-style: normal;
   display: inline-block;
   margin-bottom: 1.12rem;
`

const SortingContainer = styled('div')`
   display: flex;
   width: 59.375vw;
   align-items: center;
   justify-content: space-between;
`

const Container = styled('div')(({ theme }) => ({
   display: 'flex',
   flexDirection: 'column',
   justifyContent: 'space-between',
   fontFamily: theme.typography.mainFontFamily,
}))

const ProductContainer = styled('div')`
   display: flex;
   justify-content: space-between;
   /* align-items: flex-start; */
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
   gap: 0.625vw;
   display: flex;
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
const PositionContainer = styled('div')`
   display: flex;
   flex-direction: column;
   position: relative;
`

const Sorting = styled('div')`
   gap: 9px;
   display: flex;
   font-size: 16px;
   font-weight: 400;
   color: #384255;
   line-height: 130%;
   font-style: normal;
   align-items: center;
   cursor: pointer;
`

const ArrowIconStyled = styled(ArrowIcon)`
   transform: rotate(180deg);
`
