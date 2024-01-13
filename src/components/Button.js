const Button =({name,onClick})=>{
    return(
        <div className="button-class">
        <button onClick={onClick}>
            {name}
        </button>
        </div>
        
    )
}
export default Button;