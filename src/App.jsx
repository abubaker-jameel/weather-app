import React, { useEffect } from "react";
import PrivateRoutes from "./utils/PrivateRoutes";
import { Header } from "./components/Header";
import { Home, Favorite, SignIn, SignUp } from "./pages/index";
import { Route, Routes } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { login, logout } from "./features/userSlice";
import { useDispatch } from "react-redux";
import { auth } from "./firebase";
import useUpdateRoutes from "./hooks/useUpdateRoutes";

const App = () => {
  const { favoriteCityRoutes } = useUpdateRoutes();
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, []);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/auth" element={<SignUp />} />
        <Route element={<PrivateRoutes />}>
          <Route path="/favorite" element={<Favorite />} />
          {favoriteCityRoutes}
        </Route>
        <Route path="*" element={<p>404 Error Nothing to Show</p>} />
      </Routes>
    </>
  );
};

export default App;
