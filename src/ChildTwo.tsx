import { useContext } from "react"
import userContext from "./Provider"

export const ChildTwo =() =>{

    const {username, setUsername} = useContext(userContext);
    return  (
        <div>
            Child Component 2 {username}
        </div>
    )
}