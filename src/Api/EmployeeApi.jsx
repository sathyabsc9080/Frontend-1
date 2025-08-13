    const axios = require('axios');

    // export default axios.create({
    //   baseURL: 'https://jsonplaceholder.typicode.com',
    // });
    
    export const getEmployees = async () => {
      const response = await axios.get('/users');
      return response.data;
    };

    export const getEmployeeById = async (id) => {
      const response = await axios.get(`/users/${id}`);
      return response.data;
    };

    export const createEmployee = async (employee) => {
      const response = await axios.post('/users', employee);
      return response.data;
    };
export const updateEmployee = async (id, employee) => {
  const response = await axios.put(`/users/${id}`, employee);
  return response.data;
};

// export function login(loginRequest) {
//   return sendRequest({
//     url: `${config.url.API_BASE_URL}/auth/authenticate`,
//     method: 'POST',
//     body: JSON.stringify(loginRequest),
//   });
// }
