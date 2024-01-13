
import React, {useState} from "react"; 
import Input from "./Input";
import Button from './Button';

 
const Calc= ()=>{

     // State to store input values and result/error messages
    const [input,setInput] =useState({
        num1:"",
        num2:"",
    })
    const [display,setDisplay] =useState("");
    const [error, setError] = useState("");

    const handleInput = function(e){
        setInput({
            ...input, 
            [e.target.name]: e.target.value
        });
        console.log(e.target.value)
    }


    // Validate input values
    const validateInput = (num1, num2) => {
        if(num1 === "" || num2 === "" || isNaN(num1) || isNaN(num2)){
            setError("Error!")
            setDisplay("Number cannot be empty")
            return false
        }
        setError("Success");
        return true;
    }
    const handleClick=(operation)=>{
        const {num1,num2}=input;
        if(validateInput(num1,num2)){
            let result
            if(operation==="add"){
                result=Number(num1)+Number(num2)
            }
            else if(operation==="sub"){
                result=Number(num1)-Number(num2)
            }
            else if(operation==="mul"){
                result=Number(num1)*Number(num2)
            }
            else if(operation==="divide"){
                if(input.num2==="0"){
                    setError("Error!");
                    setDisplay("Cannot divided by zero")
                    return
                }
                
                result=Number(num1)/Number(num2)
                
            }
        setDisplay(result);
        }
        
       
    }
    return(
        <div className="Calc">
            <h1>
            React Calculator
            </h1>
            <Input placeholder="Num 1" name="num1" value={input.num1} onChange={handleInput}></Input>
            <Input placeholder="Num 2"   name="num2" value={input.num2} onChange={handleInput}></Input>
            <Button name="+" onClick={()=>handleClick("add")} ></Button>
            <Button name="-" onClick={()=>handleClick("sub")} ></Button>
            <Button name="*" onClick={()=>handleClick("mul")} ></Button>
            <Button name="/" onClick={()=>handleClick("divide")}  ></Button>
            <div className="errors">
            <h3>{error && <p style={{color: error==="Error!" ? 'red' : 'green'}}>{error}</p>}</h3>
            <h3>{display && <p>Result : {display}</p>}</h3>
        </div>
            
        </div>
    )
}



export default Calc;