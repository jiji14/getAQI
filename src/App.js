import React, {Component} from 'react';
import './App.css';
import Findcity from './components/Findcity';
import ShowResult from './components/ShowResult';
import AirImage from './components/AirImage';

class App extends Component{

  constructor(props){
    super(props);
    this.state={
      isLoaded: false,
      status:null,
      city:null,
      pm25:null,
      time:null,
      quality:null
    };
  }

  // Getting data from Api
  _callApi = (city) => {
    const city = this.state.city;
    return fetch('https://api.waqi.info/feed/'+city+'/?token=a52f054e9b618ef2f10a33155f2f3e4cd50ef1d7')
    .then(response => response.json())
    .then(
      (result) => {
        if(result.status === 'ok'){
          // Ajax Load는 성공, city 값 가져오기 성공

          const pm25 = result.data.iaqi.pm25.v;
          let _quality = '';
          
          // pm25 값에 따라 quality 값 설정
          // function 따로 빼기 
          if(pm25 <= 50){
            _quality = 'Good';   
          }else if(50 < pm25 && pm25 <= 100){
            _quality = 'Moderate';
          }else if(100< pm25 && pm25 <= 150){
            _quality = 'Unhealthy for Sensitive Groups';
          }else if(150< pm25 && pm25 <= 200){
            _quality = 'Unhealthy';
          }else if(200< pm25 && pm25 <= 250){
            _quality = 'Very Unhealthy';
          }else{
            _quality = 'Hazardous';
          }

          this.setState({
            isLoaded: true,
            status: "ok",
            city: result.data.city.name,
            pm25: result.data.iaqi.pm25.v,
            time: result.data.time.s,
            quality: _quality
          });

          // return new AirQuality(...)

        }

        // setstate을 handlesubmit 안에 
        // _handleSubmit(){
        //   const city=
        //   const result = await this._callApi(city)
        //   this.setState({

        //   })
        // }

        /*
        // else if 구문을 넣어서 city 오입력했을때 나누고 싶은데 이 구문을 넣게 되면 state가 초기화됨...
        else if(result.status === 'error'){
          // Ajax Load는 성공, city 값이 없음
          this.setState({
            isLoaded: true,
            status: "nodata",
            city: "unknown",
            pm10: null,
            pm25: null,
            time: null
          });
        }
        */

      },
      (error) => {
        this.setState({
          isLoaded: false
        });
        console.log(error);
      }
    )
  }


  handleCreate = (data) => {
    const _city = data.city;
    this.setState(
      {city:_city}
    )
  }

  render(){
    this._callApi(); //submit 할때 한번만 불러오게 만들기
    const city = this.state.city;
    const time = this.state.time;
    const pm25 = this.state.pm25;
    const quality = this.state.quality;

    return(
      <div className='container'>
        <div className='leftBox'>
          <Findcity onCreate={this.handleCreate} />
          <ShowResult city={city} time={time} pm25={pm25} quality={quality}/>
        </div>
        <div className='rightBox'>
          <AirImage pm25={pm25} quality={quality}/>
        </div>
      </div>
    )
  }
}
export default App;
