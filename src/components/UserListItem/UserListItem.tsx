import { UserListItemProps } from "../../interfaces/UserListItemProps.interface";

import css from "./UserListItem.module.css";

export const UserListItem: React.FC<UserListItemProps> = ({
  name,
  username,
  email,
  phone,
}) => {
  return (
    <li className={css.users_list_item}>
      <span>{name}</span>
      <span>{username}</span>
      <span>{email}</span>
      <span>{phone}</span>
    </li>
  );
};
