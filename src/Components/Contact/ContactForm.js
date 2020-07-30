import React, {Component} from 'react';
import woolf from "../../img/woolf.svg";

const validate = {
    name: (val) => !/^[^%]{3,}$/.test(val),
    email: (val) => !/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(val),
    message: (val) => !/^[^%]{3,}$/.test(val),
}

export default class ContactForm extends Component {
    constructor(props) {
        super(props);
        this.state={
            name:{
                label:"Name",
                value:"",
                error: false,
            },
            email:{
                label:"Email Address",
                value:"",
                error: false,
            },
            message:{
                label:"I would love to hear from you...",
                value:"",
                error:false,
            },
            success: false
        }
    }

    handleOnChange = items => e => {
        this.setState({
            [items]:{...this.state[items], value: e.target.value}
        })
    }

    handleOnBlur = items => e => {
    this.setState({
        [items]:{...this.state[items], error: validate[items](this.state[items].value)}
    })
    }

    handleFormSubmit = event => {
        event.preventDefault();
        const data = {};
        Object.keys(this.state).forEach(elem =>{
            data[elem] = this.state[elem].value
            this.setState(prevState=> ({
                [elem]: {
                    ...prevState[elem],
                    value: ''
                }
            }))
        })
        this.setState({success:true})
        this.timeout = setTimeout(()=> this.setState({success:false}), 5000)
        console.log(data)
    }

    componentWillUnmount() {
        clearTimeout(this.timeout)
    }

    render() {
    const {name, email, message} = this.state;
    const valid = name.error || email.error || message.error;

    return (
        <div className="container contactFrom">
            <div className="woolfImage">
                <img alt="woolf" src={woolf}/>
            </div>
            <form onSubmit={this.handleFormSubmit} id='contact-form'>
                <h2>If you want to make something <span>together,</span></h2>
                <h3>or just <span>fancy saying Hello,</span> then get in touch...</h3>
                <div className='personalData'>
                    <div className="personName">
                        <input className="name"
                               type="text" name="name"
                               value={this.state.name.value}
                               placeholder={this.state.name.label}
                               onChange={this.handleOnChange('name')}
                               onBlur={this.handleOnBlur('name')}
                        />
                        {this.state.name.error && <div className="messageInfo">Write your name.</div>}
                    </div>
                    <div className="personName">
                        <input className="email"
                               type='text' name='name'
                               value={this.state.email.value}
                               placeholder={this.state.email.label}
                               onChange={this.handleOnChange('email')}
                               onBlur={this.handleOnBlur("email")}
                        />
                        {this.state.email.error && <div className="messageInfo">Please enter a valid email address.</div>}
                    </div>
                </div>
                <div>
                       <textarea className="message" rows="1" type='text' name="message"
                                 value={this.state.message.value}
                                 placeholder={this.state.message.label}
                                 onChange={this.handleOnChange("message")}
                                 onBlur={this.handleOnBlur("message")}
                       />
                    {this.state.message.error && <div className="messageInfo">You must include at least one positive keyword with 3 characters or more.</div>}
                </div>
                <div disabled={valid} className="button">
                    <button disabled={valid} className="contactBtn" id="btn" type="submit">Send IT!</button>
                    {this.state.success ? (<div className="messageContact">Message sent!</div> ) : false}
                </div>

            </form>

        </div>

    )
    }
}

