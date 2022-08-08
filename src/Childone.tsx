import { useContext, useState } from "react"
import userContext from "./Provider";

export const ChildOne = ()=>{
    const [name, setName] = useState('');
    const {username, setUsername} = useContext(userContext);
    const handleClick = () =>{
        setUsername(name);
    }
   const handleChange =(e : any)=>{
    setName(e?.target?.value);
   }


    return (
        <div>
            <input type="text"  onChange={handleChange} />
            <button onClick={handleClick}>Publish</button>
        </div>
    )

}