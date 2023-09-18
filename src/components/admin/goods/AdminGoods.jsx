import { useEffect, useState } from 'react'
import { Pagination, Tab, Tabs, styled } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import dayjs from 'dayjs'
import { useDispatch, useSelector } from 'react-redux'
import { AdminTable } from '../UI/admin.table/Table'
import { ReactComponent as SearchIcon } from '../../../assets/icons/search-icon.svg'
import { Button } from '../../UI/Button'
import { DiscountModal } from './DiscountModal'
import { useCustomSearchParams } from '../../../hooks/useCustomSearchParams'
import { ReactComponent as ClipIcon } from '../../../assets/icons/clip.svg'
import { BannerModal } from './BannerModal'
import { Calendar } from '../../UI/calendarFolder/Calendar'
import { getAllFilteredProducts } from '../../../store/admin.goods/admin.goods.thunk'
import { ReactComponent as ArrowBottom } from '../../../assets/icons/arrows/down-icon.svg'
import { SortPopUp } from './sort.popup/SortPopUp'

function a11yProps(index) {
   return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
   }
}

export const AdminGoods = () => {
   const [inputValue, setInputValue] = useState('')
   const { filteredProducts, countOfProducts } = useSelector(
      (state) => state.adminGoods
   )
   const [tabValue, setTabValue] = useState(0)
   const [productType, setProductType] = useState('Все товары')
   const [startDate, setStartDate] = useState()
   const [endDate, setEndDate] = useState(null)
   const [page, setPage] = useState()
   const { params, setParam, deleteParam } = useCustomSearchParams()
   const [debounceTimeout, setDebounceTimeout] = useState(null)
   const [sort, setSort] = useState('')
   const [openSort, setOpenSort] = useState(false)
   const dispatch = useDispatch()
   const getStartDate = (e) => {
      setStartDate(e)
   }
   const getEndDate = (e) => {
      setEndDate(e)
   }
   const getSortType = (value) => {
      setSort(value)
   }
   const getInputValue = (event) => {
      setInputValue(event.target.value)
      setParam('keyword', event.target.value)
      if (event.target.value.length === 0) {
         deleteParam('keyword')
      }
      if (debounceTimeout) {
         clearTimeout(debounceTimeout)
      }
      const newDebounceTimeout = setTimeout(() => {
         dispatch(
            getAllFilteredProducts({
               keyword: inputValue,
               productType,
               startDate: dayjs(startDate).format('YYYY-MM-DD'),
               // endDate: dayjs(endDate).format('YYYY-MM-DD'),
               endDate: '2023-09-17',
               pageSize: 7,
               pageNumber: page,
            })
         )
      }, 500)

      setDebounceTimeout(newDebounceTimeout)
   }
   const navigate = useNavigate()

   const closeModalHandler = () => {
      deleteParam('openModalDiscount')
   }
   const toggleSortHandler = () => {
      setOpenSort(!openSort)
   }
   useEffect(() => {
      if (tabValue === 0) {
         setProductType('Все товары')
      }
      if (tabValue === 1) {
         setProductType('В продаже')
      }
      if (tabValue === 2) {
         setProductType('В избранном')
      }
      if (tabValue === 3) {
         setProductType('В корзине')
      }
   }, [tabValue])
   useEffect(() => {
      dispatch(
         getAllFilteredProducts({
            keyword: inputValue,
            productType,
            startDate: dayjs(startDate).format('YYYY-MM-DD'),
            endDate: '2023-09-17',
            pageSize: 7,
            pageNumber: page,
         })
      )
   }, [startDate, endDate, productType, page])
   const getPage = (event, page) => {
      setPage(page)
   }
   const openModalHandler = () => {
      setParam('openModalDiscount', 'true')
   }
   const openBannerModalHandler = () => {
      setParam('openModalBanner', 'true')
   }
   const closeBannerModalHandler = () => {
      deleteParam('openModalBanner')
   }
   const handleChange = (event, newValue) => {
      setTabValue(newValue)
   }
   return (
      <Container>
         <WidthContainer>
            <ProductsToolContainer>
               <ButtonInputContainer>
                  <SearchForm>
                     <Input
                        value={inputValue}
                        onChange={getInputValue}
                        placeholder="Поиск по артикулу или ..."
                        type="text"
                     />
                     <StyledVector input={inputValue} />
                  </SearchForm>
                  <ButtonContainer>
                     <StyledButton
                        padding="1.1111vh 1.979vw"
                        variant="outlined"
                        backgroundhover="#CB11AB"
                        backgroundactive="#E313BF"
                        onClick={() => navigate('/admin/add-products-part-1')}
                     >
                        Добавить товар
                     </StyledButton>
                     <StyledButton
                        padding="1.1111vh 1.979vw"
                        variant="outlined"
                        backgroundhover="#CB11AB"
                        backgroundactive="#E313BF"
                        onClick={openModalHandler}
                     >
                        Создать скидку
                     </StyledButton>
                     <DiscountModal
                        open={params}
                        handleClose={closeModalHandler}
                     />
                  </ButtonContainer>
               </ButtonInputContainer>
               <TabsButtonContainer>
                  <Tabs
                     value={tabValue}
                     onChange={handleChange}
                     aria-label="basic tabs example"
                  >
                     <Tab label="Все товары" {...a11yProps(0)} />
                     <Tab label="В продаже" {...a11yProps(1)} />
                     <Tab label="В избранном" {...a11yProps(2)} />
                     <Tab label="В корзине" {...a11yProps(3)} />
                  </Tabs>
                  <BannerButton onClick={openBannerModalHandler}>
                     <ClipIcon />
                     Загрузить баннер
                  </BannerButton>
                  <BannerModal
                     open={params.has('openModalBanner')}
                     onClose={closeBannerModalHandler}
                  />
               </TabsButtonContainer>
               <CalendarContainer>
                  <Calendar
                     onChange={getStartDate}
                     value={dayjs(startDate)}
                     maxDate={dayjs(endDate)}
                     fontSize="14px"
                     height="35px"
                     placeholder="От"
                     width="100%"
                  />
                  <Calendar
                     onChange={getEndDate}
                     value={endDate}
                     minDate={dayjs(startDate)}
                     fontSize="14px"
                     marginTop="-9px"
                     height="35px"
                     placeholder="До"
                     width="100%"
                  />
               </CalendarContainer>
               <TableContainer>
                  <SortAndCountOfProductsContainer>
                     <CountOfProducts>
                        Найдено {countOfProducts} товаров
                     </CountOfProducts>
                     <PositionContainer>
                        <Sort onClick={toggleSortHandler}>
                           Сортировать
                           <StyledArrowBottom
                              style={{
                                 transform: openSort
                                    ? 'rotate(180deg)'
                                    : 'rotate(0deg)',
                              }}
                           />
                        </Sort>
                        {openSort && (
                           <SortPopUp
                              sort={sort}
                              getSortType={getSortType}
                              onClick={toggleSortHandler}
                              openSort={openSort}
                           />
                        )}
                     </PositionContainer>
                  </SortAndCountOfProductsContainer>
                  <AdminTable
                     indexForTable={0}
                     itemTableArray={filteredProducts}
                  />
                  <PaginationContainer>
                     <Pagination
                        count={Math.ceil(countOfProducts / 7)}
                        onChange={getPage}
                     />
                  </PaginationContainer>
               </TableContainer>
            </ProductsToolContainer>
         </WidthContainer>
      </Container>
   )
}
const Container = styled('div')`
   display: flex;
   justify-content: center;
   margin-top: 2.083vw;
`
const PaginationContainer = styled('div')`
   display: flex;
   justify-content: center;
   margin-top: 1.25vw;
   margin-bottom: 6.25vw;
   .Mui-selected {
      background-color: #cb11ab !important;
      color: #f7fafc;
   }
`
const ButtonContainer = styled('div')`
   display: flex;
   gap: 1.458vw;
`
const PositionContainer = styled('div')`
   display: flex;
   flex-direction: column;
   position: relative;
`
const Sort = styled('button')`
   color: #384255;
   padding: 0;
   text-align: center;
   font-family: Inter;
   font-size: 14px;
   font-style: normal;
   font-weight: 500;
   line-height: 130%;
   border: none;
   background: none;
   cursor: pointer;
   display: flex;
   align-items: center;
   gap: 6px;
`
const CountOfProducts = styled('p')`
   color: #384255;
   text-align: center;
   font-family: Inter;
   font-size: 14px;
   font-style: normal;
   font-weight: 400;
   line-height: 130%;
   margin: 0;
`
const SortAndCountOfProductsContainer = styled('div')`
   display: flex;
   justify-content: space-between;
`
const TableContainer = styled('div')`
   display: flex;
   flex-direction: column;
   gap: 0.833vw;
`
const CalendarContainer = styled('div')`
   display: flex;
   gap: 1.042vw;
   width: 298px;
   margin-bottom: 3.125vw;
`
const StyledArrowBottom = styled(ArrowBottom)`
   transition: transform 0.3s ease;
   width: 16px;
   height: 16px;
   path {
      fill: #384255;
   }
`
const BannerButton = styled('button')`
   border: none;
   background: none;
   cursor: pointer;
   display: flex;
   align-items: center;
   color: #384255;
   font-family: Inter;
   font-size: 0.875rem;
   font-style: normal;
   font-weight: 500;
   line-height: normal;
   gap: 0.375rem;
`
const WidthContainer = styled('div')`
   width: 89.583vw;
`
const ProductsToolContainer = styled('div')`
   width: 67.969vw;
`
const ButtonInputContainer = styled('div')`
   display: flex;
   justify-content: space-between;
   margin-bottom: 2.083vw;
`
const Input = styled('input')`
   width: 29.115vw;
   height: 2.5rem;
   border-radius: 0.375rem;
   border: 1px solid var(--Gray-Input, #cdcdcd);
   padding: 0.59375rem 2.2rem 0.5625rem 1.125rem;
   color: black;
   outline: none;

   ::placeholder {
      color: #91969e;
   }
`
const SearchForm = styled('form')`
   width: 29.115vw;

   display: flex;
   position: relative;
   align-items: center;

   button {
      margin: 0;
      padding: 0;
      border: 0;
      background: none;
   }
   :hover {
      input {
         transition: background-color 0.4s ease;
         background-color: #fff;
         ::placeholder {
            color: gray;
         }
      }

      svg {
         path {
            fill: gray;
         }
      }
   }
   input {
      :focus {
         transition: background-color 0.4s ease;
         background-color: #fff;
         ::placeholder {
            color: gray;
         }
         ~ svg path {
            fill: gray;
         }
      }
   }
`
const StyledButton = styled(Button)`
   color: #cb11ab;
   font-family: Inter;
   font-size: 14px;
   font-style: normal;
   font-weight: 600;
   line-height: 120%;
`
const StyledVector = styled(SearchIcon)`
   position: absolute;
   right: 18px;
   width: 1.042vw;
   height: 1.042vw;
   fill: gray;
   path {
      fill: ${(props) =>
         props.input === '' ? '#91969e !important' : '#cb11ab !important'};
   }
   cursor: pointer;
`
const TabsButtonContainer = styled('div')`
   display: flex;
   justify-content: space-between;
   padding-bottom: 1.563vw;
   border-bottom: 1px solid #cdcdcd;
   margin-bottom: 1.042vw;
   .MuiTab-root.Mui-selected {
      background-color: #384255;
      color: #fff;
   }
   .MuiTab-root {
      height: 2.25rem;
      border-radius: 4px;
      color: #fff;
      font-family: Inter;
      font-size: 14px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      color: #384255;
      min-height: 0;
      background-color: #e0e2e7;
      padding: 0px 20px 0px 20px;
      text-transform: none;
   }
   .MuiTabs-root {
      min-height: auto;
   }

   .MuiTabs-indicator {
      display: none;
   }

   .MuiTabs-flexContainer {
      display: flex;
      gap: 0.625vw;
   }
`
