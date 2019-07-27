import React, {Component} from 'react';
import ListGroup from 'react-bootstrap/ListGroup'


class ShowResult extends Component{

    render(){
        const city = this.props.city;
        const time = this.props.time;
        const airIndex = this.props.airIndex;
        const quality = this.props.quality;

        if(city!= null && airIndex != null){
            return(
                <div>
                    <div className='resultBox'>
                        <ListGroup variant="flush">
                            <ListGroup.Item>Location  :  {city}</ListGroup.Item>
                            <ListGroup.Item>Time  :  {time}</ListGroup.Item>
                            <ListGroup.Item>Air quality  :  {airIndex}pm</ListGroup.Item>
                        </ListGroup>
                    </div>

                    <div className={quality}>
                    The air quality in {city} is <em>{quality}</em>
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