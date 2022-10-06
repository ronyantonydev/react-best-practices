import { useState, useEffect } from "react"
import { User } from "../finish/types"

const UserList: React.FC<{ }> = () => {
    const [users, setUsers] = useState<any>([])
    
    useEffect(() => {
      const loadUsers = async () => {  
        const response:any = await fetch('https://reqres.in/api/unknown')
        const data = await response.json()
        setUsers(data.data);
      }
      loadUsers()
      
    }, [])
    
    const startingYear = new Date();
    const endingYear = new Date();
    startingYear.setFullYear(startingYear.getFullYear() - 22);
    endingYear.setFullYear(endingYear.getFullYear() - 20);
   
    return (
      <ul>
        {users && users.filter((user: User) => user  &&
         user.year >= startingYear.getFullYear() &&
          user.year < endingYear.getFullYear())
          .map((user: User) => 
          <li key={user.id}>
            <p>{user.name}</p>
            <small>{user.pantone_value}</small>
          </li>
        )}
      </ul>    
    )
  }

  export default UserList