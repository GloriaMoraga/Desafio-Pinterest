import React, { Component } from 'react'
import axios from 'axios';
import ImageResults from '../image-results/ImageResults';

class Search extends Component {
 state ={
        searchText: '',
        amount: 20,
        apiUrl: 'https://pixabay.com/api/',
        apiKey: '968305-23d6df71958191317ed0f09cd',
        images: []
      }

 onTextChange = e =>{
     this.setState({[e.target.name]: e.target.value}, () => {
         axios.get(`${this.state.apiUrl}/?key=${this.state.apiKey}&q=${this.state.searchText}&image_type=photo&per_page=${this.state.amount}&safesearch=true`)
         .then(res => this.setState({images: res.data.hits}))
         .catch(err => console.log(err));
     });
 };   
 
 
  render() {
      console.log(this.state.images)
    return (
      <div>
     
          <input name="searchText" 
          value={this.state.searchText} 
          onChange={this.onTextChange}/>
          <ImageResults images={this.state.images}/>
      </div>
    )
  }
}

export default Search;