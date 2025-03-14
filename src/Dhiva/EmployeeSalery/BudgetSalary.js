
//input
//The company has a budget of ₹5,00,000 ,  Employees earn ₹600 per day, working between 15 to 25 days.
//Deductions: PF: 1.2% , TDS: 1%

//Output
//Task: How many employees can the company afford while staying within budget?

import React from 'react'

const BudgetSalary = () => {
  const employees = [
    { name: "Dhiva", daysWorked: 25, salary: 600 },
    { name: "Praveen", daysWorked: 15, salary: 600 },
    { name: "Virat", daysWorked: 20, salary: 600 },
    { name: "Ajith", daysWorked: 23, salary: 600 },
    { name: "Ronaldo", daysWorked: 21, salary: 600 }
  ]
  const calculateSalary = (daysWorked,salary) => {
    const totalSalary = daysWorked * salary;
    const pf = totalSalary * (1.5 / 100);
    const tdf = totalSalary * (2 / 100);
    const takeHomeSalary = totalSalary - (pf + tdf) ;
    return{totalSalary , pf ,tdf , takeHomeSalary};
  }
  return (
    <div className='text-center justify-center'>
      <h1 className='font-bold font-serif text-2xl'>budget salary and Employees</h1>
      <table className='border-solid font-bold font-serif text-xl'>
        <thead>
          <tr>
            <th>Employees</th>
            <th>Salary</th>
            <th>workingDays</th>
            <th>totalSalary</th>
            <th>PfDeduction</th>
            <th>TdfDeduction</th>
            <th>takeHomeSalary</th>
            <th>noOfEmployees</th>
            <th>TotalBudget</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp,index ) => {
            const {totalSalary , pf ,tdf , takeHomeSalary} = calculateSalary(emp.daysWorked,emp.salary);
            const Budget = 500000 ;
            const noOfEmployees = Math.floor(Budget / takeHomeSalary)
            const TotalBudget = noOfEmployees * takeHomeSalary
            return(
              <tr key={index}>
                <td>{emp.name}</td>
                <td>{emp.salary}</td>
                <td>{emp.daysWorked}</td>
                <td>{totalSalary}</td>
                <td>{pf}</td>
                <td>{tdf}</td>
                <td>{takeHomeSalary}</td>
                <td>{noOfEmployees}</td>
                <td>{TotalBudget}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default BudgetSalary

