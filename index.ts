
import express, { Request, Response } from 'express';
import { createEmployee, updateEmployeeById, deleteEmployeeById } from './controllers/employeeController';
import { connectDB } from './db/database';

const app = express();
app.use(express.json());

app.post('/employees', createEmployee);
app.put('/employees/:id', updateEmployeeById);
app.delete('/employees/:id', deleteEmployeeById);

// Handle 404 Not Found
app.use((req: Request, res: Response) => {
  res.status(404).json({ success: false, error: 'Not Found' });
});

// Handle errors
app.use((err: Error, req: Request, res: Response) => {
  console.error(err.stack);
  res.status(500).json({ success: false, error: 'Internal Server Error' });
});

// Connect to MongoDB
connectDB().then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('MongoDB connection error:', err);
});

export default app;