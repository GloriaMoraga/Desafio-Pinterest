import React, { Component } from 'react'
import axios from 'axios';
import ImageResults from '../image-results/ImageResults';
import ImageRandom from '../image-random/ImageRandom';
import './Search.css';
import logo from '../../img/logo.png';
import user from '../../img/player.png';

class Search extends Component {
 state ={
        searchText: '',
        amount: 20,
        apiUrl: 'https://pixabay.com/api/',
        apiKey: '968305-23d6df71958191317ed0f09cd',
        images: [],
        image: []
      }

 onTextChange = e =>{
     this.setState({[e.target.name]: e.target.value}, () => {
         axios.get(`${this.state.apiUrl}/?key=${this.state.apiKey}&q=${this.state.searchText}&image_type=photo&per_page=${this.state.amount}&safesearch=true&orientation=vertical`)
         .then(res => this.setState({images: res.data.hits}))
         .catch(err => console.log(err));
     });
 };   
 
 componentDidMount(){
  axios.get(`${this.state.apiUrl}/?key=${this.state.apiKey}&image_type=photo&per_page=${this.state.amount}&safesearch=true&orientation=vertical`)
  .then(response => this.setState({image: response.data.hits}))
  .catch(err => console.log(err));

 }
  render() {

    return (
      <div>
      <header className="header-top">

          <div className="input-box">
         <div className="logo"><img alt="logo" src={logo}/></div>
          <input className="input-search" name="searchText" 
          value={this.state.searchText} 
          onChange={this.onTextChange}/>
         </div>

        <div className="login-box">
            <h5 className="text-title">Inicio</h5>
            <h5 className="text-title">Siguiendo</h5>
            <div className="user-box"><img alt="user" src={user}/></div>
            <h5 className="text-title">Juan Nieve</h5>
            <i class="fas fa-comment-dots icon-class"></i>
            <i class="fas fa-bell icon-class"></i>
            <i class="fas fa-ellipsis-h icon-class"></i>


        </div>
        </header>

        <div className="container-img">
        <ImageRandom image={this.state.image}/>
        <ImageResults images={this.state.images}/>
        </div>
      </div>
    )
  }
}

export default Search;