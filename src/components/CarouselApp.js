import React from 'react';
import {getImages} from '../apiCalls';
import CarouselSlider from './CarouselSlider';
import ImageDetails from './ImageDetails';
import {getImageDetails} from '../apiCalls';
import Tesseract from 'tesseract.js';


class CarouselApp extends React.Component{
    state = {
        imageDetails: {
            title: '',
            features: []
        },
        imageText: ''
    }

    onImageClick = (i)=>{
        getImageDetails(i).then((data)=>{
            this.setState({imageDetails: {...data}})
        })
    }

    onScanClick = (imageURL)=>{
        Tesseract.recognize(
            `https://cors-anywhere.herokuapp.com/${imageURL}`,
            'eng',
            { logger: m => console.log(m) }
          ).then(({ data: { text } }) => {
            console.log(text);
            this.setState({imageText: text})
          })
    }

    render(){
        return(
            <div>
                <CarouselSlider onImageClick={this.onImageClick}/>
                <ImageDetails imageText={this.state.imageText} imageDetails={this.state.imageDetails} onScanClick={this.onScanClick}/>
            </div>
        );
    }
}

export default CarouselApp;