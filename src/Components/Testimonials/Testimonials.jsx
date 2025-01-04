import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'

const Testimonials = ({subTitle,title}) => {

    const slider = useRef()
    let tx =0;

  const slideForward=()=>{
    if(tx > -50){
        tx -=25
    }
    slider.current.style.transform= `translateX(${tx}%)`
  }
  const slideBackward=()=>{
    if(tx < 0 ){
        tx +=25
    }
    slider.current.style.transform= `translateX(${tx}%)`
  }

  return (
    <div className='testimonials'>
        <div className="testimonials-header">
        <h3 className="sub-title">{subTitle}</h3>
        <h2 className="main-title">{title}</h2>
      </div>
       <img src={next_icon} alt="" className='next-btn' onClick={slideForward}/>
       <img src={back_icon} alt="" className='back-btn' onClick={slideBackward}/>
       <div className="slider">
        <ul ref={slider}>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_1} alt="" />
                         <div>
                            <h3>Sofia Henzy</h3>
                            <span>Edusity, USA</span> 
                         </div>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam possimus repellendus, dolores a dolorem porro, vitae earum dicta incidunt rerum sapiente, eaque eum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui tempore ipsum soluta.</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_2} alt="" />
                         <div>
                            <h3>William Jackson</h3>
                            <span>Edusity, NewYork</span> 
                         </div>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam possimus repellendus, dolores a dolorem porro, vitae earum dicta incidunt rerum sapiente, eaque eum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui tempore ipsum soluta.</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_3} alt="" />
                         <div>
                            <h3>Julia Dezusa</h3>
                            <span>Edusity, France</span> 
                         </div>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam possimus repellendus, dolores a dolorem porro, vitae earum dicta incidunt rerum sapiente, eaque eum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui tempore ipsum soluta.</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_4} alt="" />
                         <div>
                            <h3>Mak Zan</h3>
                            <span>Edusity, Australia</span> 
                         </div>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam possimus repellendus, dolores a dolorem porro, vitae earum dicta incidunt rerum sapiente, eaque eum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui tempore ipsum soluta.</p>
                </div>
            </li>
        </ul>
       </div>
    </div>
  )
}

export default Testimonials