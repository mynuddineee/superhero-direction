import React, { useEffect, useState } from 'react';
import Cal from '../Calculator/Cal';
import Salary from '../Salary/Salary';
import'./Company.css';

const Company = () => {
    const [salarys, setSalarys] = useState([]);
    const [cal, setCal] = useState([]);
    useEffect( () =>{
        fetch('./salary.JSON')
        .then(res => res.json())
        .then(data => setSalarys(data));
    }, [])

    const clickSalaryToAdd = (salary) => {
        //console.log(salary.name);
        const newCal = [...cal, salary];
        setCal(newCal);

    }


    return (
        <div className= "card-container">
            <div className="cards">
                
                {
                    salarys.map (salary => <Salary 
                        key ={salary.id}
                        salary ={salary}
                        clickSalaryToAdd={clickSalaryToAdd}
                        >
                        </Salary>)
                }

                </div>   
           
           <div className="cart">
               <Cal cal={cal}></Cal>
           </div>
        </div>
    );
};

export default Company;