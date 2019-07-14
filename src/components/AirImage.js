import React, {Component} from 'react';
import Image from 'react-bootstrap/Image'

class AirImage extends Component{

    _airQualityImg = () =>{

        const quality = this.props.quality;
        let _imgSrc='';
        
        if(quality === null){
            _imgSrc = 'http://www.morpc.org/wordpress/wp-content/uploads/2017/12/AQi_Metered-Version_GR2-01-1024x550.png';
        }else if(quality === 'Good'){
            _imgSrc = 'http://vincenthills.info/wp-content/uploads/2009/08/iStock_000010003815Small.jpg';    
        }else if(quality === 'Moderate'){
            _imgSrc = 'https://www1.uwe.ac.uk/et/images/aqmrc_banner.jpg';   
        }else if(quality === 'Unhealthy for Sensitive Groups'){
            _imgSrc = 'http://img.hani.co.kr/imgdb/resize/2019/0115/154745436225_20190115.JPG';   
        }else if(quality === 'Unhealthy'){
            _imgSrc = 'https://images.theconversation.com/files/246971/original/file-20181123-149718-3nhrdw.jpg?ixlib=rb-1.1.0&rect=0%2C869%2C4054%2C1849&q=45&auto=format&w=1356&h=668&fit=crop';    
        }else{
            _imgSrc = 'http://www.prior-scientific.co.uk/wp-content/uploads/2018/09/Photochemical-Smog.jpg';   
        }

        return _imgSrc;
    }
  
    render(){
        const imgSrc = this._airQualityImg();
        return (
            <Image className="airImg" src={imgSrc} rounded/>
        )
    }
}

export default AirImage;