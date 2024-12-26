
interface Props{
    children:string;
    // color is optional (?) also the value should be from the given values
    color?:'primary'|'secondry'|'danger';
    onClick:()=>void;
}

// default parameter given to color
const Button = ({children,color='primary',onClick}:Props)=>{
    return (
        <button className={"btn btn-"+color} onClick={onClick}>
            {children}
        </button>
    )
}

export default Button