import { User } from "./types";


const UserItem: React.FC<{user: User}> = ({user}) => {
  
  return (
    <li>
      <p>{user.name}</p>
      <small>{user.pantone_value}</small>
    </li>
  );
};

export default UserItem;
