import { Component } from "react";
import React from 'react';
import './footer.css';

class Footer extends Component {
    constructor() {
    super()
    this.state = {
        title:'React App',
        keyword:'Footer ho ni'
    }
    }

    handleChange = (event) =>{
        this.setState({keyword:event.target.value});
    }
    state = {  }
    render() { 
        // const myStyle = {
        //     // header:{
        //     //     backgroundColor:'tomato'
        //     // },
        //     // logo:{
        //     //     color:'white',
        //     //     textAlign:'center',
        //     //     fontSize:'30px'
        //     // }
        // }
        return ( 
            <header><h1>{this.state.title}</h1>
            <input onChange={this.handleChange}/>
            <div style={{color:'white',fontSize:'30px'}}>
                {this.state.keyword}
            </div>
            </header>
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