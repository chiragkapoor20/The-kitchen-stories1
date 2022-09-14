import React from 'react'
import {Swiper,SwiperSlide} from 'swiper/react'
import { Navigation, Pagination, EffectFade, Mousewheel } from 'swiper'
import './Carasoul.css'
import Vegan from './vegan.jpg'
import Spgh from './sphg.jpg'
import Springroll from './springroll.jpg'
import Thai from './thai.jpg'
import Pizza from './pizza.jpg'


//2010990175
export default function Carasoul(){
    return(
        <div className='bigcontainer'>
        <div className='headcar'>WHAT TO COOK IN SEPTEMBER?</div> 
        
         
        <Swiper className='swiper-container'

        modules={[Navigation,Pagination,EffectFade, Mousewheel]}

        navigation={{
            nextEl:'.swiper-button-next',
            prevEl:'.swiper-button-prev',
        }}


        effect={'fade'}
        speed={300}
        slidesPerView={1}
        spaceBetween={20}
        loop={true}
        mousewheel={
            {invert:false}
        }
        pagination={
            {
                el:'.swiper-pagination',
                clickable:true,
                dynamicBullets:true

            }
        }






        
        
        
        >
        
        <div className='swiper-wrapper'> 




        <SwiperSlide className='slider-item swiper-slide'>
         
          <div className='slider-image-wrapper'>  
           <img className='slider-image' src={Vegan} alt="vegan"/>  
           </div>  
          <div className='slider-item-content'>  
           <h1>Vegan ratatouille</h1>  
           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>  
          </div>  
         

        </SwiperSlide>

        <SwiperSlide className='slider-item swiper-slide'>
        
          <div className='slider-image-wrapper'>  
           <img className='slider-image' src={Spgh} alt="Sphagetti"/>  
           </div>  
          <div className='slider-item-content'>  
           <h1>Sphagetti</h1>  
           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>  
          </div>  
         

        </SwiperSlide>

        <SwiperSlide className='slider-item swiper-slide'>
          
          <div className='slider-image-wrapper'>  
           <img className='slider-image' src={Springroll} alt="springroll"/>  
           </div>  
          <div className='slider-item-content'>  
           <h1>Spring Roll</h1>  
           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>  
          </div>  
        
        </SwiperSlide>

        <SwiperSlide className='slider-item swiper-slide'>
       
          <div className='slider-image-wrapper'>  
           <img className='slider-image' src={Thai} alt="Thai curry"/>  
           </div>  
          <div className='slider-item-content'>  
           <h1>Thai Curry</h1>  
           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>  
          </div>  
         

        </SwiperSlide>

        <SwiperSlide className='slider-item swiper-slide'>
         
            <div className='slider-image-wrapper'>  
             <img className='slider-image' src={Pizza} alt="Pizza"/>  
             </div>  
            <div className='slider-item-content'>  
             <h1>Farm Villa Pizza</h1>  
             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>  
            </div>  
          

        </SwiperSlide>
        </div>


        <div className='slider-buttons'>  
          <button className='swiper-button-prev'>Prev</button>  
          <button className='swiper-button-next'>Next</button>  
        </div>  
        <div className='swiper-pagination'></div>  
        










        </Swiper>
        </div>
        
        






        




    )
}











