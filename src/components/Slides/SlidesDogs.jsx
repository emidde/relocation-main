import React from 'react';
import '../../App.css'
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Avatar } from '@mui/material';
import bed from '../../img/pet-cama.png'
import kit from '../../img/kit-pet.png'
import house from '../../img/house-pet.png'
import '../../index.css'

const SlideDogs = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1
      };

  return (
    <div className="content-testimunials"  style={{ display: "flex", justifyContent: "center", marginTop: 50 }}
    >
            <div className='testimunials' style={{width: "50%"}}>
        <Slider {...settings}>
            <div className="textos-testimunials">
            <Card img={bed} />
            </div>
            <div className="textos-testimunials sm:hidden">
            <Card img={kit} />
            </div>
            <div className="textos-testimunials">
            <Card img={house} />
            </div>
        </Slider>
    </div>
    </div>
  );
};

const Card = ({ img }) => {
    return (
        <div className="cards" style={{
        display: "flex", 
        alignItems: "center", 
        flexDirection: 'column'}}>
            <Avatar
            imgProps={{style:{borderRadius: "50%" }}}
            src={img} style={{ 
                width: '250px', 
                height:'250px',
                border: '1px solid lightgray', 
                padding: 7
                }}/>
        
        </div>
    )
}

export default SlideDogs;