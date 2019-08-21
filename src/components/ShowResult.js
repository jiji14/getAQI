import React, {Component} from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import '../css/ShowResult.css';


class ShowResult extends Component{

    render(){
        const city = this.props.city;
        const airInfo = this.props.airInfo;

        // 결과값을 정상으로 받아올때와 null 일때 분리
        return(
            <>
            { city!= null && airInfo.airIndex != null ? (
                <div className="showResult">
                <div className='resultBox'>
                    <ListGroup variant="flush">
                        <ListGroup.Item>Location  :  {city}</ListGroup.Item>
                        <ListGroup.Item>Time of Measurement :  {airInfo.time}</ListGroup.Item>
                        <ListGroup.Item>Air Quality  :  {airInfo.airIndex}pm</ListGroup.Item>
                    </ListGroup>
                </div>

                <div className={airInfo.quality}>
                The air quality in {city} is <em>{airInfo.quality}</em>
                </div>
            </div>
            ) : (
                <div className='resultBox'>
                    <div className='cityError'>Please put correct city name.</div>
                    <div className='default'>Find if your city has good air quality!</div>
                </div>
            )}
            </>
        )
    }
}

export default ShowResult;