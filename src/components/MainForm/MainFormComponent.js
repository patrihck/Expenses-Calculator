import React from "react";
import MainViewSelect from './../MainViewSelect';
import ExpensesFormContainer from './ExpensesForm/ExpensesFormContainer';
function MainFormComponent(props) { 

    
  return (
      <div>
          <MainViewSelect selectedView={props.selectedView} onChange={props.onChange}></MainViewSelect>
          <div hidden={props.expensesFormHidden}>
          <ExpensesFormContainer></ExpensesFormContainer>
          </div>
      </div>
  );
}

export default MainFormComponent;