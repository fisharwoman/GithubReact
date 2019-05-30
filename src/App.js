import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { link } from 'fs';

export default class App extends React.Component{
  state = {
    results: null,
    link: `https://api.github.com/search/users?q=fisharman`
  };

  componentDidMount() {
    let url = this.state.link;
    console.log(url)
    axios.get(url)
      .then(res => {
        const results = res.data;
        this.setState({ results });
        // console.log(JSON.stringify(results));
      })
  }
  
  render() {
    const JSONres = this.state.results;
    const resultsArray = [];
    if (JSONres) {
      const items = JSONres.items
      Object.keys(items).forEach( index => {
        resultsArray.push([items[index].login, items[index].repos_url]);
      })
      // console.log(resultsArray);
    }

    return (
      <table>
        <tbody>
        {resultsArray.map((row, idx) => (
          <tr key={idx} ><td> <a href={row[1]} onClick={() => this.changeState(row[1])}>{row[0]} </a></td></tr>
        ))}
        </tbody>        
      </table>
    );
  }

  changeState(urlTo){
    const link = urlTo
    console.log(link);
    this.setState({link});
    // this.componentDidMount();
  }

  }


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           WELCOME <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }


