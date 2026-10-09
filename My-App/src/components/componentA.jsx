// import {createContext} from 'react'
// import ComponentD from './componentD';
// export const MyContext = createContext();




// export default function ComponentA(){
//     return(
//         <div>
//             <h1>Component A</h1>
//             <p>This is Component A.</p>
//             <MyContext.Provider value={{name: 'John', age: 30}}>
//              <componentD />
//             </MyContext.Provider>
//         </div>

//     )
// }




import { createContext } from 'react';
import ComponentD from './componentD';

export const MyContext = createContext();

export default function ComponentA() {
    return (
        <div>
            <h1>Component A</h1>
            <p>This is Component A.</p>

            <MyContext.Provider
                value={{ name: 'John', age: 30 }}
            >
                <ComponentD />
            </MyContext.Provider>
        </div>
    );
}