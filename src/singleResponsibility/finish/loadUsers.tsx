import { useState, useEffect } from "react";
import { ApiResponse, User } from "./types";

const allUsers = () => {
  const [users, setUsers] = useState<[User] | null>(null);

  useEffect(() => {
    const loadUsers = async () => {
      const response = await fetch("https://reqres.in/api/unknown");
      const data : ApiResponse = await response.json();
      setUsers(data.data);
    };
    loadUsers();
  }, []);
  
  return { users };
};

export default allUsers;
