import { createEmployee } from './employee';

const fullTimeEmployee = createEmployee({
  type: 'FullTime',
  baseSalary: 1000,
});

console.log(`Full time employee salary: ${fullTimeEmployee.calculateSalary()}`);

const partTimeEmployee = createEmployee({
  type: 'PartTime',
  hourlyRate: 10,
  hoursWorked: 40,
});

console.log(`Part time employee salary: ${partTimeEmployee.calculateSalary()}`);
