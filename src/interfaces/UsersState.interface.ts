import { User } from "./User.interface";
export interface UsersState {
  items: User[];
  searchTerm: string;
  isLoading: boolean;
  error: string | null;
}
