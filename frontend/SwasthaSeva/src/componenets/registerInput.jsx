function RegisterInput(props)
{
    var classval=props.className;
    return(
        <span>
            <div className="text-white">{props.name}</div>
            <input className={classval}></input>
        </span>
    )
}
export default RegisterInput;