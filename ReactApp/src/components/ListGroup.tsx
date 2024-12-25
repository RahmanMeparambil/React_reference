// import { MouseEvent } from "react";


import { useState } from "react";

function ListGroup(){
    let items = ["New York", "San Francisco", "Tokyo", "London"];

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
        return items.length===0 ? <p>No item found</p> : null;
    }
    // Fragment is a useful feature in React to group multiple elements together without adding extra nodes to the DOM.
    return (
        <>
            <h1>List</h1>
            { items.length === 0 ? <p>{getMessage()}</p> : null}
            {/* { items.length===0 && <p>No item found</p>} */}
            <ul className="list-group">
                {items.map((item, index) => (
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