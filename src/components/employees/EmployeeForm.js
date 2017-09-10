import React, {PropTypes} from 'react';
import TextInput from '../common/TextInput';
import CheckBox from '../common/CheckBox';

class EmployeeForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <form>
          <TextInput
            name="name"
            label="name"
            value={this.props.employee.name}
            onChange={this.props.onChange}/>


          <TextInput
            name="address"
            label="address"
            value={this.props.employee.address}
            onChange={this.props.onChange}/>

          <TextInput
            name="email"
            label="email"
            value={this.props.employee.email}
            onChange={this.props.onChange}/>

          <TextInput
            name="phone"
            label="phone"
            value={this.props.employee.phone}
            onChange={this.props.onChange}/>

          <TextInput
            name="job"
            label="job"
            value={this.props.employee.job}
            onChange={this.props.onChange}/>

          <TextInput
            name="salary"
            label="salary"
            value={this.props.employee.salary}
            onChange={this.props.onChange}/>

          <input
            type="submit"
            disabled={this.props.saving}
            value={this.props.saving ? 'Saving...' : 'Save'}
            className="btn btn-primary"
            onClick={this.props.onSave}/>
        </form>
      </div>
  );
  }
}

EmployeeForm.propTypes = {
  employees: React.PropTypes.object.isRequired,
  onSave: React.PropTypes.func.isRequired,
  onChange: React.PropTypes.func.isRequired,
  onHobbyChange: React.PropTypes.func.isRequired,
  saving: React.PropTypes.bool
};

export default EmployeeForm;
