import React from 'react';
import'./Cal.css';

const Cal = (props) => {
    //console.log(props.cal);
    const {cal} = props;
    let total = 0;
    let name = '';
    for(const salary of cal){
        total = total + salary.salary;
        name = name + salary.name;
    }

    
    return (
        <div className="cart">
            <h2>Total Salary Calculator</h2>
            <h4>Employee Added: {props.cal.length}</h4>
            <h4>Total Salary: {total}</h4>
            <h4>Employee Name: {name}  </h4>
            
        </div>
    );
};

export default Cal;