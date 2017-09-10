import React, {PropTypes} from 'react';
import {Link, browserHistory} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import EmployeeList from './EmployeeList';
import NewEmployeePage from './NewEmployeePage';

class EmployeesPage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const employees = this.props.employees;
    return (
      <div className="col-md-12">
        <h1>Cats <Link to={'/employees/new'} className="btn btn-primary">+ employee</Link></h1>
        <div className="col-md-4">
          <EmployeeList employees={employees} />
        </div>
        <div className="col-md-8">
          {this.props.children}
        </div>
      </div>
    );
  }
}

EmployeesPage.propTypes = {
  employees: PropTypes.array.isRequired,
  children: PropTypes.object
};

function mapStateToProps(state, ownProps) {
  return {
    employees: state.employees
  };
}

export default connect(mapStateToProps)(EmployeesPage);

