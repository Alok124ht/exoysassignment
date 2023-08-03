import { Request, Response } from 'express';
import Employee, { Employee as EmployeeModel } from '../models/employeeModel';

export const createEmployee = async (req: Request, res: Response) => {
  const employeeData: EmployeeModel = req.body;

  try {
    const employee = await Employee.create(employeeData);
    res.json({ success: true, employee });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Failed to create employee' });
  }
};

export const updateEmployeeById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const employeeData: EmployeeModel = req.body;

  try {
    const employee = await Employee.findByIdAndUpdate(id, employeeData, { new: true });
    if (employee) {
      res.json({ success: true, employee });
    } else {
      res.status(404).json({ success: false, error: 'Employee not found' });
    }
  } catch (error) {
    res.status(500).json({ success: false, error: 'Failed to update employee' });
  }
};

export const deleteEmployeeById = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const employee = await Employee.findByIdAndUpdate(id, { isDeleted: true }, { new: true });
    if (employee) {
      res.json({ success: true, employee });
    } else {
      res.status(404).json({ success: false, error: 'Employee not found' });
    }
  } catch (error) {
    res.status(500).json({ success: false, error: 'Failed to delete employee' });
  }
};