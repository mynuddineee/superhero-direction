import React, { useEffect, useState } from 'react';
import Salary from '../Salary/Salary';
import'./Company.css';

const Company = () => {
    const [salarys, setSalarys] = useState([]);
    useEffect( () =>{
        fetch('./salary.JSON')
        .then(res => res.json())
        .then(data => setSalarys(data));
    }, [])


    return (
        <div className= "card-container">
            <div className="cards">
                
                {
                    salarys.map (salary => <Salary 
                        
                        salary ={salary}
                        >

                        </Salary>)
                }

                </div>
           
                
           
           <div className="cart">
               <h2>Total Salary</h2>
           </div>
        </div>
    );
};

export default Company;