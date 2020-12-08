import axios from 'axios';
const EMPLOYEE_API_BASE_URL="http://localhost:8080/api/v1/employees"
class EmployeeService {

    getEmployees()
    {
        return axios.get(EMPLOYEE_API_BASE_URL); // get islemi icin rest ile frontend in baglantisi 
    }

    createEmployee(employee){
        return axios.post(EMPLOYEE_API_BASE_URL,employee);//frontend den girileni employee ile axios library ile post
    }
}
export default new EmployeeService()