import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = () => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt="" className='about-img' />
            <img src={play_icon} alt="" className='play-icon' />
        </div>
        <div className="about-right">
             <h3>ABOUT UNIVERSITY</h3>
             <h2>Nurturing Tomorrow's Leaders Today</h2>
             <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur, omnis labore corrupti impedit nam exercitationem, ullam veniam reiciendis modi, dolores excepturi! Dicta, eveniet cumque laborum facilis consequatur 
             </p>
             <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt expedita tempore, dicta obcaecati harum fugit accusamus aspernatur, at tenetur totam optio ipsa illo eius, enim voluptatum labore fuga magnam deleniti facere  </p>
             <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus similique illo facilis tempora harum molestiae. Dolore atque hic consectetur quas saepe est aliquam iure excepturi officia ducimus voluptates, ab veniam beatae nesciunt enim</p>
        </div>
    </div>
  )
}

export default About