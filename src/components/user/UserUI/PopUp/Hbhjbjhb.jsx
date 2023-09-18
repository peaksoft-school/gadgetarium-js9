import React, { useState, useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import Slider from 'react-slick'

export const AsNavFor = () => {
   const infoPhone = useSelector((state) => state.product.infoPhone)
   const [sliderState, setSliderState] = useState({
      nav1: null,
      nav2: null,
   })

   const slider1 = useRef(null)
   const slider2 = useRef(null)

   useEffect(() => {
      setSliderState({
         nav1: slider1.current,
         nav2: slider2.current,
      })
   }, [])

   return (
      <div>
         <h2>Slider Syncing (AsNavFor)</h2>
         <h4>First Slider</h4>
         <Slider asNavFor={sliderState.nav2} ref={slider1}>
            {infoPhone.images?.map((image) => (
               <div
                  onClick={() =>
                     navigate(`/product/${productId}/details/fullPicture`)
                  }
                  key={image}
               >
                  <img height="80rem" src={image} alt="gadget" />
               </div>
            ))}
         </Slider>
         <h4>Second Slider</h4>
         <Slider
            asNavFor={sliderState.nav1}
            ref={slider2}
            slidesToShow={3}
            swipeToSlide
            focusOnSelect
         >
            <div>
               <h1>1</h1>
            </div>
            <div>
               <h1>2</h1>
            </div>
            {/* <div>
               <h1>3</h1>
            </div> */}

            {/* {infoPhone.images?.map((image) => (
               <div key={image}>
                  <img src={image} alt="gadget" />
               </div>
            ))} */}
         </Slider>
      </div>
   )
}
