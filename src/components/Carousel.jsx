import React, { Component } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";


class Carousel extends Component {
  constructor() {
    super()
  
    this.state = {
        count : 0
    }
  }

  forward = () =>{
    if(this.state.count < 2){
        this.setState({count:this.state.count += 1})
    } else{
      this.setState({count: this.state.count = 0})
    }
  }

  backward = () =>{
    if(this.state.count>0){
        this.setState({count:this.state.count -=1})
    } else{
      this.setState({count:this.state.count = 2})
    }
  }

  render(){    
    return(
        <div className="body">
           
                
                <div className="name">
                  <div onClick={this.backward} className="ArrowLeft"><ArrowBackIosIcon/></div>
                    <div className="container">
                        <img src={images[this.state.count].img} />
                        <div className="topg">
                          {images[this.state.count].title}
                        </div>
                        <div className="sub">
                          {images[this.state.count].subtitle}
                        </div>
                    </div>
                </div>
                <div onClick={this.forward} className="ArrowRight"><ArrowForwardIosIcon/></div>
           
        </div>
    )
  }
}

export default Carousel;