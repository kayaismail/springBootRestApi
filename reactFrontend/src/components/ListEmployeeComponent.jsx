import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';


class ListEmployeeComponent extends Component {
    constructor(props){
        super(props)
        this.state={
            employees: []

        }
        this.addEmployee=this.addEmployee.bind(this);
    }
    componentDidMount(){
        EmployeeService.getEmployees().then((res)=>{
        this.setState({ employees : res.data});
        });
    }
    addEmployee(){
        this.props.history.push('/add-employee'); //butona tiklandigin da bu route calisacak
    }
    render() {
        return (
            <div>
                <h2 className="text-center">Employees List</h2>
                <div className="row">
                    <button className="btn btn-primary" onClick={this.addEmployee}>Add Employee</button> 
                </div>
                <div className="row">

                    <table className="table table-striped table-boordered">
                        <thead>
                        <tr>
                            <th> Employee First Name</th>
                            <th> Employee Last Name</th>
                            <th> Employee Email Id</th>
                            <th> Action </th>
                        </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.employees.map(
                                   employee=>
                                   <tr key={employee.id}>
                                       <td>{employee.firstName}</td>
                                       <td>{employee.lastName}</td>
                                       <td>{employee.emailId}</td>
                                   </tr>             

                                )

                            }

                        </tbody>
                       

                    </table>

                </div>
            </div>
        )
    }
}

export default ListEmployeeComponent;