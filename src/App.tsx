import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "./redux/store";

import { useEffect } from "react";
import { fetchUsers } from "./redux/operations";
import { getError, getIsLoading } from "./redux/selectors";

import "./App.css";
import UsersList from "./components/UserList/UserList";
import { Loader } from "./components/Loader/Loader";

function App() {
  const dispatch = useDispatch<AppDispatch>();
  const error = useSelector(getError);
  const isLoading = useSelector(getIsLoading);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <>
      {isLoading && !error && <Loader />}
      {!isLoading && <UsersList />}
    </>
  );
}

export default App;
