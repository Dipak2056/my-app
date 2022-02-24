import './App.css';
import React,{Component} from 'react';
import { Header } from './Header';
import Main from './Main';
import Footer from './Footer';
import ViewProduct from './ViewProduct';
import JSON from './db.json';

class App extends Component{
  constructor(){
    super ();

    this.state = {
      products:JSON
    }

  }
  render () {
    return (
      <div className="App">
       <h1>this is my first react app</h1>
       
       <hr />
       <Header/>
       <hr />
      <Main/>
      <ViewProduct prodData={this.state.products} />
       <hr />
       <Footer year='2020' month='Nov '/>
  
  
  
      </div>
    );
  }
 
}



export default App;
