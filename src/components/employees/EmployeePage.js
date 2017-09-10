import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as employeeActions from '../../actions/employeeActions';
import EmployeeForm from './EmployeeForm';
import {browserHistory} from 'react-router';

class EmployeePage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      employee: Object.assign({}, this.props.employee), 
      saving: false,
      isEditing: false
    };
    this.saveEmployee = this.saveEmployee.bind(this);
    this.updateEmployeeState = this.updateEmployeeState.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
    this.deleteEmployee = this.deleteEmployee.bind(this);
    this.redirect = this.redirect.bind(this);
  }


  componentWillReceiveProps(nextProps) {
    if (this.props.employee.id != nextProps.employee.id) {
      this.setState({employee: Object.assign({}, nextProps.employee)});
    }
    this.setState({saving: false, isEditing: false});
  }

  toggleEdit() {
    this.setState({isEditing: true});
  }

  updateEmployeeState(event) {
    const field = event.target.name;
    const employee = this.state.employee;
    employee[field] = event.target.value;
    return this.setState({employee: employee});
  }

  saveEmployee(event) {
    event.preventDefault();
    this.setState({saving: true});
    this.props.actions.updateEmployee(this.state.employee);

  } 

  deleteEmployee(event) {
    this.props.actions.deleteEmployee(this.state.employee)
  }

  redirect() {
    browserHistory.push('/employees');
  }

  render() {
    if (this.state.isEditing) {
      return (
      <div>
        <h1>edit employee</h1>
        <EmployeeForm 
          employee={this.state.employee} 
          onSave={this.saveEmployee} 
          onChange={this.updateEmployeeState} 
          saving={this.state.saving}/> 
      </div>
      )
    }
    return (
      <div className="col-md-8 col-md-offset-2">
        <h1>{this.state.employee.name}</h1>
        <p>address: {this.state.employee.address}</p>
        <p>email: {this.state.employee.email}</p>
        <p>phone: {this.state.employee.phone}</p>
        <p>job: {this.state.employee.salary}</p>
        <p>salary: {this.state.employee.salary}</p>
        <button onClick={this.toggleEdit} className="btn btn-default  ">edit</button>
        <button onClick={this.deleteEmployee} className="btn btn-default  ">delete</button>
      </div>
    );
  }
}


EmployeePage.propTypes = {
  employee: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

function getEmployeeById(employees, id) {
  let employee = employees.find(employee => employee.id == id)
  return Object.assign({}, employee)
}

function mapStateToProps(state, ownProps) {
  let employee = {name: '', address: '', email: '', phone: '', job: '', salary: '' };
  const employeeId = ownProps.params.id;
  if (employeeId && state.employees.length > 0) {
    employee = getEmployeeById(state.employees, ownProps.params.id);
  } 
    return {employee: employee};
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(employeeActions, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(EmployeePage);



