import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import EmployeePage from './EmployeePage';

const EmployeeListRow = ({employee}) => {
  return (
   <tr>
      <td><Link to={'/employees/' + employee.id}>{employee.name}</Link></td>
    </tr>
  );
};

EmployeeListRow.propTypes = {
  employee: PropTypes.object.isRequired
};

export default EmployeeListRow;
