// import { styled } from '@mui/material'
// import React, { useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { slideIn, slideOut } from '../../../../utils/common/constants/constants'
// import CheckboxInput from '../../../UI/icon.input/CheckboxInput'
// import { ArrowIcon } from '../../../UI/Arrow'
// import { categoryActions } from '../../../../store/cataog/catalogSlice'

// export const Sim = () => {
//    const { cateMemoryRam, memoryRamArray } = useSelector(
//       (state) => state.category
//    )
//    const dispatch = useDispatch()

//    const openHandler = () => {
//       dispatch(categoryActions.setCateMemoryRam(!cateMemoryRam))
//    }

//    const postTitle = (id) => {
//       dispatch(categoryActions.changeMemoryRam(id))
//    }

//    useEffect(() => {
//       dispatch(categoryActions.memoryRam())
//    }, [memoryRamArray])
//    return (
//       <Container checked={cateMemoryRam}>
//          <CategorySelectContainer>
//             <h5>Процессор ноутбука</h5>
//             <ArrowIcon checked={cateMemoryRam} onClick={openHandler} />
//          </CategorySelectContainer>
//          {cateMemoryRam && (
//             <div className="content">
//                {simCatalog?.map((el) => (
//                   <div key={el.id}>
//                      <CheckboxInputStyled
//                         isChecked={el.checked}
//                         onClick={() => postTitle(el.id)}
//                      />
//                      <span>{el.title}</span>
//                   </div>
//                ))}
//             </div>
//          )}
//       </Container>
//    )
// }

// const Container = styled('div')`
//    margin-top: 1.8519vh;
//    border-bottom: 1px solid #e8e8e8;
//    padding-bottom: 1.8519vh;
//    .content {
//       display: flex;
//       flex-direction: column;
//       gap: 1.2963vh;
//       margin-top: 1.2963vh;
//       animation: ${(props) => (props.checked ? slideIn : slideOut)} 0.3s
//          ease-in-out;
//       span {
//          font-size: 1rem;
//          font-style: normal;
//          font-weight: 400;
//          line-height: 140%;
//       }
//       div {
//          display: flex;
//          align-items: center;
//          gap: 0.625vw;
//       }
//    }
// `
// const CategorySelectContainer = styled('div')`
//    display: flex;
//    align-items: center;
//    justify-content: space-between;
//    margin-bottom: 1.2963vh;
//    h5 {
//       width: 13.75vw;
//       font-size: 1rem;
//       font-style: normal;
//       font-weight: 600;
//       line-height: 120%;
//       margin: 0;
//       padding: 0;
//    }
// `
// const CheckboxInputStyled = styled(CheckboxInput)`
//    margin: 0;
//    width: 1.896vw;
//    height: 2.797vh;
//    margin-left: -0.3rem;
// `
