import React, { Component } from 'react';
import {inject,observer} from 'mobx-react';
import {
  HashRouter,
  Route,
} from 'react-router-dom';


import About from './components/about'
import Birds from './components/birds'


@inject('BirdStore')
@observer
class App extends Component {
  handleSubmit = (e) => {
    e.preventDefault()
    const bird = this.bird.value
    if(!bird){
      return
    }
    this.props.BirdStore.addBird(bird)
    this.bird.value = ''
  }

  handleDel = (index) => {
    console.log(index)
    this.props.BirdStore.delBird(index)
  }

  render() {
    const {BirdStore} = this.props

    return (
      <HashRouter>
      <div className="App">
        <h5 className="">
          You have {BirdStore.birds.length} birds.
        </h5>
        <form onSubmit={e => this.handleSubmit(e)}>
          <input type="text" ref={input => this.bird = input}/>
          <button>
            add bird
          </button>
        </form>

      
        <Route exact path='/about' component={About}/>
        <Route path='/birds' component={Birds}/>
      

        <ul>
          {BirdStore.birds.map((bird, index) => (
            <li key={bird.time + index}>
            {bird.name}
            <button onClick={e => this.handleDel(index)}> del </button>
            </li>
          ))}
        </ul>
      </div>
      </HashRouter>
    );
  }
}

export default App;