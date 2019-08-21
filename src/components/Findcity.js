import React, {PureComponent} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../css/Findcity.css';

class Findcity extends PureComponent{
    constructor(props){
        super(props);
        this.state={
          city:''
        };
    }

    // input 입력할때마다 state 변경 
    handleChange = (event) => {
        this.setState(
             {city: event.target.value}
        );   
    }

    // sumit 할때 입력한 city data 전송 
    handleSubmit = (event) => {
        event.preventDefault();
        // 앞 뒤 공백 없애주기
        const city = this.state.city.trim();
        this._sendDate(city);
    }

    _sendDate = (city) => {
        this.props.onCreate(city);
        this.setState({
            // 전송 후 상태초기화
            city: ''
        });   
        // 전송 후 inputBox에서 커서 위치 
        this.inputRef.focus();
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
                        ref={(input) => {this.inputRef = input; }}
                    />
                    <Button type="submit" variant="info" className="schBtn">Search</Button>
                </form>
            </div>
        )
    }
}

export default Findcity;
