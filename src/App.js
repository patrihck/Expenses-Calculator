import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainViewSelect from './components/MainViewSelect';
import MainFormContainer from './components/MainForm/MainFormContainer';

class App extends React.Component {
  

  render() {
    document.body.style.background = "#585858";
    return (
      <MainFormContainer addExpenseGroup = {this.addExpenseGroup} data = {this.state}></MainFormContainer>
    );
  }  
}

export default App;
