import React,{useState} from 'react';

 function Hooks()  {
     const [count] = useState(1)
     function setCount() {
         console.log('setConut')
     }
        return (
            <div>
                hooks
                <div className='count' onClick={setCount}>{count}</div>
            </div>
        );
}

export default Hooks;
