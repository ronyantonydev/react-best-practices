import { useMemo } from "react";
import { getOnlyActive } from "./filterUsers";
import allUsers from "./loadUsers";

export  const useActiveUsers = () => {
    const { users } = allUsers();
    const activeUsers = useMemo(()=> {
      return getOnlyActive(users || []);
    }, [users]);

    return { activeUsers };
  };