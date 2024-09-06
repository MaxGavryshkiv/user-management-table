import { useSelector, useDispatch } from "react-redux";
import { SearchBar } from "../SearchBar/SearchBar";
import { UserListItem } from "../UserListItem/UserListItem";
import { selectFilteredUsers, getSearchTerm } from "../../redux/selectors";
import { setSearchTerm } from "../../redux/usersSlice";
import css from "./UserList.module.css";

const UsersList: React.FC = () => {
  const dispatch = useDispatch();
  const searchTerm = useSelector(getSearchTerm);
  const users = useSelector(selectFilteredUsers);

  const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchTerm(e.target.value));
  };

  return (
    <div>
      <SearchBar searchTerm={searchTerm} onSearchChange={onSearchChange} />
      <ul className={css.users_list}>
        <li className={css.users_list_header}>
          <span>Name</span>
          <span>Username</span>
          <span>Email</span>
          <span>Phone</span>
        </li>
        {users.map((user) => (
          <UserListItem
            key={user.id}
            name={user.name}
            username={user.username}
            email={user.email}
            phone={user.phone}
          />
        ))}
      </ul>
    </div>
  );
};

export default UsersList;
