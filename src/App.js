import React, { Component } from 'react';
import './App.css';
import SearchForm from './Components/SearchForm';
import GifList from './Components/GifList';
import axios from 'axios';

export default class App extends Component {
  
  constructor() {
    super();
    this.state = {
      gifs: [],
      loading: true
    }
  } 
 
  // componentDidMount(){
  //   fetch('https://api.giphy.com/v1/gifs/trending?api_key=aQPwrEvlBqdys3AB0Owp94cGkKXxb0s9&limit=25&rating=G')
  //   .then(response => response.json())
  //   .then(responseData=>{this.setState({gifs:responseData.data}); })
  //   .catch(error=>{ console.log('error fetching and parsing data', error)});    
  // }
  // componentDidMount(){
  //   axios.get('https://api.giphy.com/v1/gifs/trending?api_key=aQPwrEvlBqdys3AB0Owp94cGkKXxb0s9&limit=25&rating=G')
  //         .then(response=>{
  //           this.setState({
  //             gifs: response.data.data
  //           });
  //         })
  //         .catch(error=>{
  //           console.log('Error fetching and parsing data', error);
  //         });
  // }
  performSearch=(query="fun")=>{
    axios.get(`https://api.giphy.com/v1/gifs/search?q=${query}&limit=24&api_key=aQPwrEvlBqdys3AB0Owp94cGkKXxb0s9&limit=25&rating=G`)
    .then(response=>{
      this.setState({
        gifs: response.data.data,
        loading: false
      });
    })
    .catch(error=>{
      console.log('Error fetching and parsing data', error);
    });
  }
  componentDidMount(){
    this.performSearch();
  }

  render() { 
    console.log(this.state);
    return (
      <div>
        <div className="main-header">
          <div className="inner">
            <h1 className="main-title">GifSearch</h1>
            <SearchForm onSearch={this.performSearch}/>      
          </div>   
        </div>    
        <div className="main-content">
          {(this.state.loading)?<p>Loading...</p> : <GifList data={this.state.gifs}/> }
        </div>
      </div>
    );
  }
}
