import React from 'react'
import { NumberList } from '../ListsKeys/ListKeys'

  function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
  }

  function WhoIAm(props){
    return <h2>I am not {props.name}, but I just wanted to say...</h2>
  }

  function UserGreeting(props) {
    return <h1>Welcome back!</h1>;
  }

  function GuestGreeting(props) {
    return <h1>Please sign up.</h1>;
  }

  function People(props) {
    const numbers = [1, 2, 3, 4, 5];
    const isLoggedIn = props.isLoggedIn;
      if (isLoggedIn) {
        return <UserGreeting />;
      }
    return (
      <div>
        <GuestGreeting />
        <NumberList numbers={numbers}/>
        <Welcome name={props.name} />
        <WhoIAm name="Batman" />
        <Welcome name="Cahal" />
        <Welcome name="Edite" />
      </div>
    );
  }

class Clock extends React.Component{
    constructor(props){
      super(props)
      this.state = {
        date: new Date(),
        value: 'Please write an essay about your favorite DOM element.',
        name: ''
      };

      this.handleNameChange = this.handleNameChange.bind(this);
      this.handleValueChange = this.handleValueChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleClick = this.handleClick.bind(this)

    }

    handleClick(thing) {
      console.log(thing);
      // console.log('this is:', this);
    }

    componentDidMount(){
      this.timeID = setInterval(
        () => this.tick(),
        1000
      )
    }

    componentWillUnmount(){
      clearInterval(this.timerID)
    }

    tick(){
      this.setState({
        date: new Date()
      })
    }

    handleValueChange(event) {
      console.log('value');
      this.setState({value: event.target.value})
    }
    handleNameChange(event) {
      console.log('name');
      this.setState({name: event.target.name});
    }
    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.name + 'wrote' + this.state.value);
      event.preventDefault();
    }

    render(){
      return (
        <div>
          <h1>its party time at:</h1>
          <h2>{ this.state.date.toLocaleTimeString() }</h2>
          <button onClick={(e)=>this.handleClick('thing1', e)}>thing1</button>
          <button onClick={this.handleClick.bind(this, 'thing2')}>thing2</button>
          <form onSubmit={this.handleSubmit}>
           <label>
             Name:
             <input type="text" value={this.state.name} onChange={this.handleNameChange} />
             {/* Essay:
             <textarea value={this.state.value} onChange={this.handleValueChange} /> */}
           </label>
           <input type="submit" value="Submit" />
         </form>
        </div>
      )
    }
  }
  function WarningBanner(props) {
  if (!props.warn) {
    return null;
  }

  return (
    <div className="warning">
      Warning!
    </div>
  );
}

function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  );
}

function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  );
}

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showWarning: true}
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  handleToggleClick() {
    this.setState(prevState => ({
      showWarning: !prevState.showWarning
    }));
  }

  render() {
    return (
      <div>
        <WarningBanner warn={this.state.showWarning} />

          {this.state.showWarning ? (
            <LogoutButton onClick={this.handleToggleClick} />
          ) : (
            <LoginButton onClick={this.handleToggleClick} />
          )}

        <button onClick={this.handleToggleClick}>
          {this.state.showWarning ? 'Hide' : 'Show'}
        </button>
      </div>
    );
  }
}

export { People, Clock, Page }
