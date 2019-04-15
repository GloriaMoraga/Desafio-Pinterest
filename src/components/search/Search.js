import React, { Component } from 'react'
import axios from 'axios';
import ImageResults from '../image-results/ImageResults';
import ImageRandom from '../image-random/ImageRandom';
import './Search.css';
import logo from '../../img/logo.png';
import user from '../../img/player.png';
import InfiniteScroll from 'react-infinite-scroll-component'


class Search extends Component {
 state ={
        searchText: '',
        amount: 20,
        apiUrl: 'https://pixabay.com/api/',
        apiKey: '968305-23d6df71958191317ed0f09cd',
        images: [],
        image: []
        
      }

 
handleSubmit = e =>{
 this.setState({[e.target.name]: e.target.value}, () => {
         axios.get(`${this.state.apiUrl}/?key=${this.state.apiKey}&q=${this.state.searchText}&image_type=photo&page=1&per_page=20&safesearch=true&orientation=vertical`)
         .then(res => this.setState({images: res.data.hits}))
         .catch(err => console.log(err));
     });
     document.getElementById('RandomImage').style.display="none";
 };   



 
 componentDidMount(){
  axios.get(`${this.state.apiUrl}/?key=${this.state.apiKey}&q=landscape&image_type=photo&page=1&per_page=20&safesearch=true&orientation=vertical`)
  .then(response => this.setState({image: response.data.hits}))
  .catch(err => console.log(err));

 }

 fetchData = () => {
  const { amount} = this.state ;
  let loading = this.state.amount + 20;
  this.setState({
    amount:loading
  
  })
  console.log(amount)
  axios.get(`${this.state.apiUrl}/?key=${this.state.apiKey}&image_type=photo&page=${amount/20}&per_page=20&safesearch=true&orientation=vertical`)
  .then(res => {
    let array= res.data.hits;
    setTimeout(() => {
    this.setState({
     image:this.state.image.concat(array)
  });
 }, 2000);})

  axios.get(`${this.state.apiUrl}/?key=${this.state.apiKey}&q=${this.state.searchText}&image_type=photo&page=${amount/20}&per_page=20&safesearch=true&orientation=vertical`)
  .then(response => {
    let arr= response.data.hits
    setTimeout(() => {
      this.setState({
        images:arr.concat(this.state.images)
      });
    }, 2000);})
}
  render() {

    return (
      <div>
      <header className="header-top">

          <div className="input-box">
         <div className="logo"><img alt="logo" src={logo}/></div>
          <input className="input-search" name="searchText" 
          value={this.state.searchText} 
          onChange={this.handleSubmit}/>
         </div>

        <div className="login-box">
            <h5 className="text-title">Inicio</h5>
            <h5 className="text-title">Siguiendo</h5>
            <div className="user-box"><img alt="user" src={user}/></div>
            <h5 className="text-title">Juan Nieve</h5>
            <i className="fas fa-comment-dots icon-class"></i>
            <i className="fas fa-bell icon-class"></i>
            <i className="fas fa-ellipsis-h icon-class"></i>


        </div>
        </header>

        <div className="container-img key={index}">
        <InfiniteScroll
          dataLength={(this.state.image.length,this.state.images.length)}
          next={this.fetchData}
          hasMore={true}
          loader={<div className="loading-gif"><img 
         src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif"
         alt="loading"/></div>}>

        <div id="RandomImage">
        <ImageRandom  image={this.state.image}/>        
        </div> 

        <ImageResults images={this.state.images}/> 
        </InfiniteScroll>

        
        </div>
      </div>
    )
  }
}

export default Search;