import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../css/Findcity.css';

class Findcity extends Component{
    constructor(props){
        super(props);
        this.state={
          city:''
        };
    }

    handleChange = (event) => {
        this.setState(
            {city: event.target.value}
        );
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onCreate(this.state);
        this.setState({
            // 상태초기화
            city: ''
        });
    }

    render(){
        return(
            <div className='findCity'>
                <h3 className="text">Find air quality your area!</h3>
                <form className="schForm" onSubmit={this.handleSubmit}>
                    <Form.Control type="text" 
                        value={this.state.city} 
                        onChange={this.handleChange}
                        name="city"
                        placeholder="city" 
                    />
                    <Button type="submit" variant="info" className="schBtn">Search</Button>
                </form>
            </div>
        )
    }
}

export default Findcity;

