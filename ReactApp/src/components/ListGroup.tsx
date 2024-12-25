

function ListGroup(){
    const items = ["New York", "San Francisco", "Tokyo", "London"];

    // Fragment is a useful feature in React to group multiple elements together without adding extra nodes to the DOM.
    return (
        <>
            <h1>List</h1>
            <ul className="list-group">
                {items.map((item) => (
                    <li key={item}>{item}</li>    
            ))}
            </ul>
        </>
    )
}

export default ListGroup;