
import React, { useState } from 'react';

const LoanCalculator = () => {
       const [principal,setPrincipal] = useState('');
       const [interestRate,setInterestRate] = useState('');
       const [years,setYears] = useState('');
       const [monthlyEMI,setMonthlyEmi] = useState(null);
       const [totalInterest,setTotalInterest] = useState(null);
       const [avgInterest,setAvgInterest] = useState(null);

       const CalculateEmi = (principal , interestRate , years) => {
          const monthlyRate = interestRate / 100 / 12;
          const numberOfPament = years * 12;
          const emi = principal * monthlyRate * Math.pow(1 + monthlyRate , numberOfPament) / (Math.pow(1 + monthlyRate , numberOfPament)-1);
          const totalPayment = emi * numberOfPament;
          const totalInterestPaid = totalPayment - principal;
          const avgInterestPaid = totalInterestPaid / numberOfPament;
          return {
            emi: emi.toFixed(2),
            totalInterest: totalInterestPaid.toFixed(2),
            avgInterest:avgInterestPaid.toFixed(2)
          }
        
       }
       const handleCalculate = () =>{
        const {emi ,totalInterest ,avgInterest } = CalculateEmi(principal , interestRate , years);
        setMonthlyEmi(emi);
        setTotalInterest(totalInterest);
        setAvgInterest(avgInterest);
      }

    return (
        <div className="md:flex items-center p-8  ">
            <h2>Loan Calculator</h2>
           <div>
              <div>
                <label>principal</label>
                <input 
                type='number'
                value={principal}
                onChange={(e)=>setPrincipal(e.target.value)}></input>
              </div>
              <div>
                <label>principal</label>
                <input 
                type='number'
                value={interestRate}
                onChange={(e)=>setInterestRate(e.target.value)}></input>
              </div>
              <div>
                <label>principal</label>
                <input 
                type='number'
                value={years}
                onChange={(e)=>setYears(e.target.value)}></input>
              </div>
           </div>
           {monthlyEMI !== null && (
            <div>
                <p>principal : {monthlyEMI}</p>
                <p>principal : {monthlyEMI}</p>
                <p>principal : {monthlyEMI}</p>
            </div>
           )}
        </div>
    );
};

export default LoanCalculator;
