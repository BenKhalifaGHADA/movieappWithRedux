
import './App.css';
import Card from './Vue/CardMovie/CardMovie.js';
import React, { Component } from 'react';
import { Rate,Input } from 'antd';
import Form from './Vue/Form/Form.js';

export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      visible: false,
      value: 1,//rate, MinRatingfilter
      titlefilter:'',
      
      loading: true
      
      
    }
    }

    /////////////////Begin spinner//////
    componentDidMount() {
      setTimeout(() => {
        this.setState({
          loading: false
        });
      }, 5000);
    }

    ///////////////End Spinner//////////
  
  
    ///For add new movie/////
  addnewMovie = (newmovies) => {
    this.setState({
      movies: this.state.movies.concat(newmovies)
    })
  }

  ///For search and show all movies////
  getAllMovies(){
    return this.state.movies.filter(
      el=>el.rate>=this.state.value&&
      el.title.toLowerCase().includes(this.state.titlefilter.toLowerCase())
    )
    }

  handleChange = (x) => {
    this.setState({ x });
  };
  render() {
    const { value } = this.state;
    const { Search } = Input;
  
    
    

    return (
      
      
      <div className="App" style={{ background: '#ECECEC', padding: '30px' }}>
       <header>
          <Search className="search"
            placeholder="input search text"
            enterButton="Search"
            size="large"
            onSearch={(newValue)=>{this.setState({
              titlefilter:newValue
            })}}
            style={{ width: 1100 }}
          />
          <Rate onChange={this.handleChange} value={value} />
       
     
          <br/><br/>
        </header>
        <main>
          {/* <Card data={this.getAllMovies()} data={this.state.movies} handlechange={(ch)=>this.handleChange(ch)} loading={this.state.loading}/> */}
         <Card/>
          <Form add={(ch)=>this.addnewMovie(ch)}/>
         </main>

      </div>

    )
  }
}
