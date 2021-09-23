import { MouseEventHandler } from 'react';
import PropClass from './components/PropClass';




function App() {
  const messageFromChild: any = (message: string) => {
    alert(message);
  }
  return (
    <h2>Props in Class Component
      <PropClass prop_str="string value" prop_false={false} prop_true={true} prop_obj={{ name: "홍길동", age: 28 }} prop_num={24} prop_func={messageFromChild} />
    </h2>
  )
}

export default App;