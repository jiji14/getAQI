import React, {Component} from 'react';
import Image from 'react-bootstrap/Image';
import '../css/AirImage.css';

class AirImage extends Component{

    _airQualityImg = (quality) =>{
        // quality 파라미터로 받아서 switch문 사용하여 image 주소 반환 
        switch(quality){
            case 'None':
                return 'https://media.tenor.com/images/d1c81eafdc947e7ad1989da43bc65f32/tenor.png';
            case 'Good':
                return 'http://vincenthills.info/wp-content/uploads/2009/08/iStock_000010003815Small.jpg';    
            case 'Moderate':
                return 'https://www1.uwe.ac.uk/et/images/aqmrc_banner.jpg';   
            case 'Unhealthy for Sensitive Groups':
                return 'http://img.hani.co.kr/imgdb/resize/2019/0115/154745436225_20190115.JPG';   
            case 'Unhealthy':
                return 'https://images.theconversation.com/files/246971/original/file-20181123-149718-3nhrdw.jpg?ixlib=rb-1.1.0&rect=0%2C869%2C4054%2C1849&q=45&auto=format&w=1356&h=668&fit=crop';    
            case 'Hazardous':
                return 'http://www.prior-scientific.co.uk/wp-content/uploads/2018/09/Photochemical-Smog.jpg';   
            default:
                return 'http://www.morpc.org/wordpress/wp-content/uploads/2017/12/AQi_Metered-Version_GR2-01-1024x550.png';
        }
    }
  
    render(){
        const quality = this.props.airInfo.quality;
        const imgSrc = this._airQualityImg(quality);
        
        return (
            <Image className="airImg" src={imgSrc} rounded/>
        )
    }
}

export default AirImage;