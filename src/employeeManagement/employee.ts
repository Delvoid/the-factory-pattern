interface FullTimeEmplyeeOptions {
  type: 'FullTime';
  baseSalary: number;
}

interface PartTimeEmployeeOptions {
  type: 'PartTime';
  hourlyRate: number;
  hoursWorked: number;
}

type EmployeeOptions = FullTimeEmplyeeOptions | PartTimeEmployeeOptions;

interface Employee {
  calculateSalary: () => number;
}

function createFullTimeEmployee(options: FullTimeEmplyeeOptions): Employee {
  return {
    calculateSalary: () => options.baseSalary,
  };
}

function createPartTimeEmployee(options: PartTimeEmployeeOptions): Employee {
  return {
    calculateSalary: () => options.hoursWorked * options.hourlyRate,
  };
}

export function createEmployee(options: EmployeeOptions): Employee {
  switch (options.type) {
    case 'FullTime':
      return createFullTimeEmployee(options);
    case 'PartTime':
      return createPartTimeEmployee(options);
  }
}
