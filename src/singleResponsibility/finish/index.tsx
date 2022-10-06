import { useState } from "react";
import { useActiveUsers } from "./activeUser";
import UserItem from "./listUser";
import { User } from "./types";


export const ActiveUsersList = () => {
  const { activeUsers } = useActiveUsers();
  
  return (
    <ul>
      {activeUsers && activeUsers.map((user: User) => (
        <UserItem key={user.id} user={user} />
      ))}
    </ul>
  );
};
