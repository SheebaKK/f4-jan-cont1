const Input =({placeholder, onChange,value,name})=>{
    return(
        <div className="input-class">
        <input onChange={onChange} name={name} value={value} type="text" placeholder={placeholder}>
        </input>
        </div>
        
    )
}
export default Input;