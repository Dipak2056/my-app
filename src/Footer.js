import { Component } from "react";
import React from 'react';

class Footer extends Component {
    constructor() {
    super()
    this.state = {
        title:'React App',
        keyword:'Footer ho ni'
    }
    }

    handleChange = (event) =>{
       // console.log(event.target.value);
        this.setState({keyword:event.target.value});
    }
    state = {  }
    render() { 
        console.log('render');
        return ( 
            <div><h1>{this.state.title}</h1>
            <input onChange={this.handleChange}/>
            <div>
                {this.state.keyword}
            </div>
            </div>
         );
    }
}
 
export default Footer;

// const Footer = (props) => {
//     console.log(props);
//     return (
//         <div>
//             &copy;Developer Funnel {props.year} {props.month}
//         </div>
//      );
// }

 
// export default Footer;