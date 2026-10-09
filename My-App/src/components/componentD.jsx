// import {useContext} from 'react'
// import { MyContext } from './componentA';

// export default function ComponentD(){
//     const contextValue = useContext(MyContext);

//     return(
//         <div>
//             <h1>Component D</h1>
//             <p>This is Component D.</p>
//             <p>Name: {contextValue.name}</p>
//             <p>Age: {contextValue.age}</p>
//         </div>
//     )
// }


import { useContext } from 'react';
import { MyContext } from './componentA';

export default function ComponentD() {
    const contextValue = useContext(MyContext);

    return (
        <div>
            <h1>Component D</h1>
            <p>This is Component D.</p>
            <p>Name: {contextValue.name}</p>
            <p>Age: {contextValue.age}</p>
        </div>
    );
}