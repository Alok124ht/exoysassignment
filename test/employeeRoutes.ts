// import request from 'supertest';
// import app from '../src/app';
// import { Employee } from '../src/models/employeeModel';

// describe('Employee API Tests', () => {
//   it('should create a new employee', async () => {
//     const newEmployee: Employee = {
//       name: 'John Doe',
//       title: 'Software Engineer',
//       department: 'Tech',
//       annualSalary: 80000,
//       isDeleted: false,
//       createdAt: new Date(),
//       updatedAt: new Date(),
//     };

//     const response = await request(app).post('/employees').send(newEmployee);
//     expect(response.status).toBe(200);
//     expect(response.body.success).toBe(true);
//     expect(response.body.employee).toBeDefined();
//     expect(response.body.employee.name).toBe(newEmployee.name);
//   });

//   it('should update an existing employee', async () => {
//     // Add the necessary code to create an employee first
//     // This is to make sure we have an existing employee to update
//     const createResponse = await request(app).post('/employees').send({
//       name: 'Jane Smith',
//       title: 'HR Specialist',
//       department: 'HR',
//       annualSalary: 60000,
//       isDeleted: false,
//       createdAt: new Date(),
//       updatedAt: new Date(),
//     });

//     const employeeId = createResponse.body.employee._id;
//     const updatedEmployee: Employee = {
//       name: 'Jane Smith',
//       title: 'Senior HR Specialist',
//       department: 'HR',
//       annualSalary: 65000,
//       isDeleted: false,
//       createdAt: new Date(),