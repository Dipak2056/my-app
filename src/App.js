import './App.css';
import { Header } from './Header';
import Main from './Main';
import Footer from './Footer';

const  App = () => {
  return (
    <div className="App">
     <h1>this is my first react app</h1>
     
     <hr />
     <Header/>
     <hr />
    <Main/>
     <hr />
     <Footer year='2020' month='Nov '/>



    </div>
  );
}

export default App;
