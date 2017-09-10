import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {browserHistory} from 'react-router';
import * as courseActions from '../../actions/employeeActions';
import EmployeeForm from './EmployeeForm';


class NewEmployeePage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      employee: {name: '', address: '', email: '', phone: '', job: '', salary: ''},
      saving: false
    };
    this.redirect = this.redirect.bind(this);
    this.saveEmployee = this.saveEmployee.bind(this);
    this.updateEmployeeState = this.updateEmployeeState.bind(this);
  }

  updateEmployeeState(event) {
    const field = event.target.name;
    const employee = this.state.employee;
    employee[field] = event.target.value;
    return this.setState({employee: employee});
  }
  
  redirect(employee) {
    browserHistory.push(`/employees/${employee.id}`);
  }
  
  saveEmployee(event) {
    event.preventDefault();
    this.props.actions.createEmployee(this.state.employee)
  }
  
  render() {
    return (
      <div>
        <h1>new employee</h1>
        <EmployeeForm 
          employee={this.state.employee} 
          onSave={this.saveEmployee}
          onChange={this.updateEmployeeState} />
      </div>
    );
  }
}

NewEmployeePage.propTypes = {
  actions: PropTypes.object.isRequired
};



function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}


export default connect( mapDispatchToProps)(NewEmployeePage);
