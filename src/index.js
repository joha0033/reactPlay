import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './component/App/App';
import registerServiceWorker from './registerServiceWorker';

function Welcome(props){
  return <h1 className="center">I'm {props.name} in index.html</h1>
}

const iAmNot = <Welcome name="root1" />

ReactDOM.render(iAmNot, document.getElementById('root1'));

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
