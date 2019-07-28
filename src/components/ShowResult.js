import React, {Component} from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import '../css/ShowResult.css';


class ShowResult extends Component{

    render(){
        const city = this.props.city;
        const airInfo = this.props.airInfo;

        if(city!= null && airInfo.airIndex != null){
            return(
                <div>
                    <div className='resultBox'>
                        <ListGroup variant="flush">
                            <ListGroup.Item>Location  :  {city}</ListGroup.Item>
                            <ListGroup.Item>Time  :  {airInfo.time}</ListGroup.Item>
                            <ListGroup.Item>Air quality  :  {airInfo.airIndex}pm</ListGroup.Item>
                        </ListGroup>
                    </div>

                    <div className={airInfo.quality}>
                    The air quality in {city} is <em>{airInfo.quality}</em>
                    </div>
                </div>
            );
        }else {
            return (
                <div className='resultBox'>
                    <div className='cityError'>Please put correct city name.</div>
                    <div className='default'>Find if your city has good air quality!</div>
                </div>
            );
        } 
    }
}

export default ShowResult;