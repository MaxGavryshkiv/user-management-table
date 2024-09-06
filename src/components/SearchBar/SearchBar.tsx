import { SearchBarProps } from "../../interfaces/SearchBar.interface";
import css from "./SearchBar.module.css";
export const SearchBar: React.FC<SearchBarProps> = ({
  searchTerm,
  onSearchChange,
}) => {
  return (
    <input
      className={css.input}
      type="text"
      placeholder="Search users..."
      value={searchTerm}
      onChange={onSearchChange}
    />
  );
};
