import React, {PureComponent} from 'react';
import './css/App.css';
import Findcity from './components/Findcity';
import ShowResult from './components/ShowResult';
import AirImage from './components/AirImage';

class App extends PureComponent{

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
    return fetch(`https://api.waqi.info/feed/${city}/?token=a52f054e9b618ef2f10a33155f2f3e4cd50ef1d7`)
    .then(response => response.json())
    .then(
      (result) => {
        if(result.status === 'ok'){
          // Ajax Load는 성공& 결과값 정상, pm25&time 값 보내주기 
          this._setAirState(result.data.iaqi.pm25.v, result.data.time.s);
        }else{
          // Ajax Load는 성공했으나, 결과값이 없을때
          this._setAirState(null, null);
        }
      },
      (error) => {
        // error일 경우 load를 fail로 
        this.setState({
          isLoaded: false
        });
        console.log(error);
      }
    )
  }
 
  //setState after getting data 
  _setAirState = (airIndex, time) => {
    // pm25(index)값에 따라 quality 설정 
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

  // setState city after getting cityName
  handleCreate = (data) => {
    // 자식 컴포넌트에서 city 값 받아서 setState
    this.setState(
      {
        city:data
      }
    )
    // city 값에 따른 미세먼지값 받아오는 API 함수
    this._callApi(data);
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
