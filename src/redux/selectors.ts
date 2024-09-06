import { RootState } from "./store";

export const getUsers = (state: RootState) => state.users.items;

export const getIsLoading = (state: RootState) => state.users.isLoading;

export const getError = (state: RootState) => state.users.error;

export const getSearchTerm = (state: RootState) => state.users.searchTerm;

export const selectFilteredUsers = (state: RootState) => {
  const { items, searchTerm } = state.users;

  if (!searchTerm) {
    return items;
  }

  return items.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.phone.toLowerCase().includes(searchTerm.toLowerCase())
  );
};
