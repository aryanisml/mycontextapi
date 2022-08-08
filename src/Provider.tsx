import { createContext, useContext, useEffect, useState } from "react";

const userContext = createContext<any>('');

export default userContext;

type props = {
    children : React.ReactNode
}

export const UserContextProvider = ({children}: props) =>{
   const [username, setUsername] = useState('');

   return (
    <userContext.Provider value={{username, setUsername}}>
         {children}
    </userContext.Provider>
   )

}