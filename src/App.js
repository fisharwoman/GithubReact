import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { link } from 'fs';

export default class App extends React.Component{

  constructor(){
    super();
    this.state = {
      results: null,
      link: `https://api.github.com/search/users?`,
      username: "",
    };
      // this.handleChange = this.handleChange.bind(this); /* no need to do with arrow function */
      // this.handleSubmit = this.handleSubmit.bind(this);  
  }


  componentDidMount() {
 
  }
  
  render() {
    // const JSONres = this.state.results;
    // const resultsArray = [];
    // if (JSONres) {
    //   const items = JSONres.items
    //   Object.keys(items).forEach( index => {
    //     resultsArray.push([items[index].login, items[index].repos_url]);
    //   })
    // }

    return (
      <div>
          <form>
              <label>Find  User </label><br/>
              <input type="text" placeholder="github username" value={this.state.inputvalue} onChange={this.handleChange}/>
              <input type="submit" value="Submit" onClick={this.findUser}/>
            </form>
        <div className="content">

          <table >
            <thead><tr><th>Users</th></tr></thead>
                  <tbody>
                  {/* {resultsArray.map((row, idx) => (
            <tr key={idx} ><td> <a href={row[1]} onClick={() => this.changeState(row[1])}>{row[0]} </a></td></tr>
          ))} */}
                    </tbody>
                    <tfoot></tfoot>   
                    </table>
        </div>

      </div>
    );
  }

  handleChange = (event) => {
    this.setState({username: event.target.value});
  }

  handleSubmit = (event) => {
    console.log('Form value: ' + this.state.inputvalue);
    event.preventDefault();
  }

  findUser = async(event) => {
    let url = this.state.link;
    console.log(url)
    event.preventDefault();
    let user = this.state.username;
    console.log(user);
    this.setState({})
    // return axios.get(link)
    //   .then(res => {
    //     const results = res.data;
    //     this.setState({ results });
    //     // console.log(JSON.stringify(results));
    //   })
    
  }
  }



