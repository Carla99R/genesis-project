import logo from './logo.svg';
import './App.css';
import { Component, Fragment } from 'react';
import grapesjs from "grapesjs";
import 'grapesjs/dist/css/grapes.min.css'
import 'grapesjs-preset-webpage/dist/grapesjs-preset-webpage.min.css'
import 'grapesjs/dist/grapes.min.js'
import 'grapesjs-preset-webpage/dist/grapesjs-preset-webpage.min.js'
import Example from './components/Example/Example';

class App extends Component {
  componentDidMount(){
    grapesjs.init({
      container: '#gjs',
      plugins:['gjs-preset-webpage'],
      fromElement: true,
      height: '100vh',
      width: 'auto',
      storageManager: false,
      panels: { defaults: [] },
    })
  }
  render(){
    return (
      <Fragment>
        <div id="gjs">
        <Example></Example>
        </div>
      </Fragment>
    )
  }
}

export default App;
