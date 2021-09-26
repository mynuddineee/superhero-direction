import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee,faCoins} from '@fortawesome/free-solid-svg-icons';
import'./Salary.css';

const Salary = (props) => {
    console.log(props.salary);
    const {name, position, department, age, salary, img} = props.salary;
    const element = <FontAwesomeIcon icon={faCoins} />
    return (
        <div className="card1">
            
                <img className="img"  src={img} alt=""/> 
            
           <div>
                <h4>Name: {name}</h4> 
                <h4>Position: {position}</h4> 
                <h4>Department: {department}</h4> 
                <h4>Age: {age}</h4> 
                <h4>Salary BDT: {salary}</h4>
           </div>
           <button className="salary-button"  type="">{element} Add Salary</button>
           
        </div>
    );
};

export default Salary;