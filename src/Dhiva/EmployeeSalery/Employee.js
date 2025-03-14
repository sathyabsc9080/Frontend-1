// Input
// Each employee has a name, days worked, and salary pf and tdf rates.

// output
// A table displaying the employee name, days worked, total salary, pf, tds and take-home salary.

import React from 'react'

const Employee = () => {
    const employees = [
        { name: "Dhiva", daysworked: 15, salery: 500 },
        { name: "Praveen", daysworked: 16, salery: 450 },
        { name: "Virat", daysworked: 10, salery: 700 },
        { name: "Ajith", daysworked: 18, salery: 600 },
        { name: "Ronaldo", daysworked: 20, salery: 900 },
    ]

    const pfRate = 1.5 / 100;
    const tdfRate = 1 / 100;
    const foodCoupon = 500;

    const calculateSalary = (daysworked, salery) => {
        const totalSalary = daysworked * salery;
        const pf = totalSalary * pfRate;
        const tds = totalSalary * tdfRate;
        const takeHomeSalary = totalSalary - pf - tds + foodCoupon;
        return { totalSalary, pf, tds, takeHomeSalary };
    }
    return (
        <div>
            <h1>Employees Salery Details</h1>
            <table>
                <thead>
                    <tr>
                        <th>Employees</th>
                        <th>Salery</th>
                        <th>DaysWorked</th>
                        <th>totalSalary</th>
                        <th>PfDeduction</th>
                        <th>TdfDeduction</th>
                        <th>takeHomeSalary</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map((emp, index) => {
                        const { totalSalary, pf, tds, takeHomeSalary } = calculateSalary(emp.daysworked, emp.salery);
                        return (
                            <tr key={index}>
                                <td>{emp.name}</td>
                                <td>{emp.salery}</td>
                                <td>{emp.daysworked}</td>
                                <td>{totalSalary}</td>
                                <td>{pf}</td>
                                <td>{tds}</td>
                                <td>{takeHomeSalary}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Employee

//Input
// perday salary 500 and days worked, and salary pf and tdf rates.

//output
// A table displaying the employee name, days worked, total salary, pf, tds and take-home salary.
// import React from 'react'

// const Employee = () => {
//   const employees = [
//     {name:"Dhiva",daysworked:15},
//     {name:"Praveen",daysworked:16},
//     {name:"Virat",daysworked:10},
//     {name:"Ajith",daysworked:18},
//     {name:"Ronaldo",daysworked:20},
//   ]
//   const perDaySalary = 500;
//   const pfRate = 1.5 / 100;
//   const tdfRate = 1 / 100;
//   const foodCoupon = 500;

//   const calculateSalary=(daysworked)=>{
//     const totalSalary = daysworked * perDaySalary;
//     const pf = totalSalary * pfRate;
//     const tds = totalSalary * tdfRate;
//     const takeHomeSalary = totalSalary - pf - tds + foodCoupon;
//     return{totalSalary , pf , tds , takeHomeSalary};
//   }
//   return (
//     <div>
//       <h1>Employees Salery Details</h1>
//       <table>
//       <thead>
//         <tr>
//           <th>Employees</th>
//           <th>DaysWorked</th>
//           <th>totalSalary</th>
//           <th>PfDeduction</th>
//           <th>TdfDeduction</th>
//           <th>takeHomeSalary</th>
//         </tr>
//       </thead>
//       <tbody>
//         {employees.map((emp,index)=>{
//             const {totalSalary , pf , tds , takeHomeSalary} = calculateSalary(emp.daysworked);
//           return(
//             <tr key={index}>
//             <td>{emp.name}</td>
//             <td>{emp.daysworked}</td>
//             <td>{totalSalary}</td>
//             <td>{pf}</td>
//             <td>{tds}</td>
//             <td>{takeHomeSalary}</td>
//           </tr>
//           );
//         })}
//       </tbody>
//       </table>
//     </div>
//   )
// }

// export default Employee


