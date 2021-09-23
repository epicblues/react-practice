import { Fragment, MouseEventHandler } from 'react';
import PropClass from './components/PropClass';
import PropFunc from './components/PropFunc';




function App() {
  const messageFromChild: any = (message: string) => {
    alert(message);
  }
  return (
    <Fragment>
      <h2>Props in Class Component
        <PropClass prop_str="string value" prop_false={false} prop_true={true} prop_obj={{ name: "홍길동", age: 28 }} prop_num={24} prop_func={messageFromChild}>
          <h4>Children From Parents</h4>
        </PropClass>
      </h2>
      <PropFunc prop_str="string value" prop_false={false} prop_true={true} prop_obj={{ name: "홍길동", age: 28 }} prop_num={24} prop_func={messageFromChild}>

      </PropFunc>
    </Fragment>

  )
}

export default App;