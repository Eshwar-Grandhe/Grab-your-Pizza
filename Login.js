import React, { Component } from 'react';
import axios from 'axios';
import {Link, Redirect,withRouter} from 'react-router-dom'
class Login extends Component {
    constructor(props) {
        super();
        this.state = {
            name: '',
            password: ''
        };
       
        this.changename = this.changename.bind(this);
        this.changepwd = this.changepwd.bind(this);
        this.changeSubmit = this.changeSubmit.bind(this);
    }
    changename(event) {
        
        this.setState({
            name: event.target.value
        });
    }
    changepwd(event) {
        this.setState({
            password: event.target.value
        });
    }
    changeSubmit(event) {
        axios.post('http://localhost:7000/getLogin',
            {
                password: this.state.password,
                email: this.state.name,
            })
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            })
            //this.props.history.push("/Homes");
    }
   
    render() {
        return (
            <div style={{marginLeft:'130px', marginRight:'130px'}}>
            <div style={{width:'55%', margin:'auto'}}>
                <br/>
                <h2 align='center'>
                    Login Form
                </h2>
                <br/>
            <form onSubmit={this.changeSubmit}>
                <div className='form-group row'>
                    <label for="name" className="col-sm-2 col-form-label">Username </label>
                    <div className='col-sm-9'>
                        <input type="text" className="form-control" id="name" placeholder="Enter Username" value={this.state.name} onChange={this.changename} required/>
                    </div>
                </div>
                <br/>
                <div className="form-group row">
                    <label for="password" className="col-sm-2 col-form-label">Password  </label>
                    <div className='col-sm-9'>
                        <input type="password" className="form-control" id="password" placeholder="Enter Password" value={this.state.password} onChange={this.changepwd} required/>
                    </div>
                </div>
                <br/>
                <center>
                    <button type="submit" className="btn btn-primary btn-xs" >Login</button>
                </center>
            </form>
            <div>
                For New User <Link to='/Register'>Registration </Link> 
            </div>
            </div>
        </div>

        )
    }
}

export default withRouter( Login);