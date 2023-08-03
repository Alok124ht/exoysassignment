import { Schema, Document, model } from 'mongoose';

export interface Employee extends Document {
  name: string;
  title: string;
  department: 'HR' | 'Tech' | 'Product' | 'Leadership';
  annualSalary: number;
  isDeleted: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const employeeSchema = new Schema<Employee>({
  name: { type: String, required: true },
  title: { type: String, required: true },
  department: { type: String, enum: ['HR', 'Tech', 'Product', 'Leadership'], required: true },
  annualSalary: { type: Number, required: true },
  isDeleted: { type: Boolean, default: false },
}, { timestamps: true });

export default model<Employee>('Employee', employeeSchema);