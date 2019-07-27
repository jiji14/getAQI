import React, {Component} from 'react';
import './App.css';
import Findcity from './components/Findcity';
import ShowResult from './components/ShowResult';
import AirImage from './components/AirImage';

class App extends Component{

  constructor(props){
    super(props);
    this.state={
      isLoaded: true,
      city: null,
      airInfo: {
        airIndex:null,
        time:null,
        quality:null
      }
    };
  }

  // Getting data from Api 
  _callApi = (city) => {
    return fetch('https://api.waqi.info/feed/'+city+'/?token=a52f054e9b618ef2f10a33155f2f3e4cd50ef1d7')
    .then(response => response.json())
    .then(
      (result) => {
        if(result.status === 'ok'){
          // Ajax Load는 성공, pm25 값 보내주기 
          this._setAirState(result.data.iaqi.pm25.v, result.data.time.s);
        }else{
          this._setAirState(null, null);
        }
      },
      (error) => {
        this.setState({
          isLoaded: false
        });
        console.log(error);
      }
    )
  }
 
  _setAirState = (airIndex, time) => {

    let _quality = '';
    if(airIndex == null){
      _quality = 'None';
    }else if(airIndex <= 50){
      _quality = 'Good';   
    }else if(airIndex <= 100){
      _quality = 'Moderate';
    }else if(airIndex <= 150){
      _quality = 'Unhealthy for Sensitive Groups';
    }else if(airIndex <= 200){
      _quality = 'Unhealthy';
    }else if( airIndex<= 250){
      _quality = 'Very Unhealthy';
    }else{
      _quality = 'Hazardous';
    }

    this.setState(
      {
        isLoaded : true,
        airInfo:{
          airIndex: airIndex,
          time: time,
          quality: _quality
        }     
      }
    )
  }


  handleCreate = (data) => {

    // 자식 컴포넌트에서 city 값 받아서 setState
    const _city = data.city;
    this.setState(
      {
        city:_city
      }
    )
    // city 값에 따른 미세먼지값 받아오는 API 함수
    this._callApi(_city);
  }


  render(){

    const {isLoaded, city, airInfo} = this.state;

    return(
      <div className='container'>
        
        <div className='leftBox'>
          <Findcity onCreate={this.handleCreate} />
          {isLoaded ? (
            <ShowResult city={city} airInfo={airInfo}/>
          ) : (
            <div className='errorMessage'>
              Failed to load Data. Please try again.
            </div>
          )}
        </div>
        {isLoaded ? (
          <div className='rightBox'>
            <AirImage airInfo={airInfo}/>
          </div>
          ) : (null)}
        
      </div>
    )
  }
}
export default App;
