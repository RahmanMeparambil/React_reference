// import { MouseEvent } from "react";
import { useState } from "react";

interface Props{
    items:string [];
    heading:string
}

// Destructuring
// function ListGroup({items,heading}:Props){
function ListGroup(props:Props){
    // let items = ["New York", "San Francisco", "Tokyo", "London"];
    // items = [];
    // event handling
    // let selected_index = -1;
    // hook
    const [selectedIndex, setSelectedIndex] = useState(-1);

    // const handleClick = (event: MouseEvent) => console.log(event)
    // items = []
    // Conditional rendering 
    // this method creates duplication
    // if (items.length ===0 ){
    //     return <>
    //     <h1>List</h1>
    //     <p>No item found</p>;
    //     </> 
    // }
    const getMessage = () => {
        return props.items.length===0 ? <p>No item found</p> : null;
    }
    // Fragment is a useful feature in React to group multiple elements together without adding extra nodes to the DOM.
    return (
        <>
            <h1>{props.heading}</h1>
            {getMessage()}
            {/* { items.length === 0 ? <p>{message}</p> : null} */}
            {/* { items.length===0 && <p>No item found</p>} */}
            <ul className="list-group">
                {props.items.map((item, index) => (
                    <li 
                        className={ selectedIndex === index?"list-group-item active":"list-group-item"} 
                        key={item} 
                        onClick={()=>{setSelectedIndex(index)}}
                    >
                        {item}
                    </li>    
            ))}
            </ul>
        </>
    )
}

export default ListGroup;