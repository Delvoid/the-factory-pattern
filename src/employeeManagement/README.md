# Employee Management 

## Concept

Develop an employee management system that allows the creation of different types of employees (such as FullTime and PartTime) using an Employee Factory, simplifying salary calculations based on employee types.

## Usefulness

- **Uniform Interface:** Utilize a consistent interface to manage various types of employees and their salary calculations.
- **Easy Expansion:** Effortlessly introduce new employee types and their respective salary calculation logic without altering existing code.
- **Streamlined Client Code:** Clients can create and manage different types of employees using a single, simplified API.

## Usage

### Creating Employees

Employees can be created by specifying their type and relevant details, allowing for a unified client interface regardless of employee type:

```typescript
import { createEmployee } from "./employee";

const fullTimeEmployee = createEmployee({
  type: "FullTime",
  baseSalary: 1000,
});

console.log(`Full time employee salary: ${fullTimeEmployee.calculateSalary()}`);
```

### Extending with New Employee Types

To introduce new employee types:

- Define their respective properties and behaviors in `employee.ts`.
- Expand the `createEmployee` function to accommodate the new type.

## Code Structure

- **`employee.ts`**
  - Contains core logic for employee definition, creation, and salary calculation.
  - `Employee`: Interface defining the basic structure of an employee.
  - `createEmployee`: A factory function to generate employees of specified types.
- **`client.ts`**
  - Demonstrates how to utilize the employee management system to create and manage various types of employees.

## Future Improvements

- **Tax and Benefit Calculations:** Implement logic to calculate taxes, benefits, and deductions based on the type and salary of the employee.
- **Attendance and Payroll Integration:** Incorporate attendance tracking and integrate with a payroll system for automated salary disbursal.
- **Employee Lifecycle Management:** Manage employee records, promotions, and other lifecycle events dynamically.

## Contributing

Contributions to enrich and enhance the employee management system are always appreciated! Feel free to submit issues or pull requests for improvements, new features, or bug fixes.
