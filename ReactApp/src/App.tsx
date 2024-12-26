// import ListGroup from './components/ListGroup';
// import Message from './Message'
import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App(){
  const [alertVisible, setAlertVisible] = useState(false)
  return (
    <>
      <div>
      {alertVisible && <Alert onClose={()=>setAlertVisible(false)}>helo</Alert>}
      <Button onClick={()=>setAlertVisible(true) }>
        Click Me
      </Button>
    </div>

    </>
  ) 
}

export default App;