class EmployeesApi {
  static getAllEmployees() {
     return fetch('http://localhost:3000/employee').then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

  static updateEmployee(employee) {
     const request = new Request('http://localhost:3000/employee/${employee.id}', {
      method: 'PUT',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify({employee: employee})
    });

    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

  static createEmployee(employee) {
     const request = new Request('http://localhost:3000/employee', {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify({employee: employee})
    });


    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

  static deleteEmployee(employee) {
     const request = new Request('http://localhost:3000/employee/${employee.id}', {
      method: 'DELETE'
    });

    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }
}


export default EmployeesApi;
