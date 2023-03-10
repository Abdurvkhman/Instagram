import "./css/styles.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import Autorize from "./pages/Autorize";
import Home from "./pages/Home";
import { useAppDispatch, useAppSelector } from "./hooks/hook";
import { useEffect } from "react";
import { checkUser } from "./reducers/user/autorization/autorizationAction";
import { token } from "./baseService";

function App() {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      dispatch(checkUser());
    } else {
      navigate("/");
    }
  }, [dispatch]);

  const { isAdmin } = useAppSelector((state) => state.autorize);

  return (
    <div className="App">
      <Routes>
        {isAdmin ? (
          <>
            <Route path="/home" element={<Home />} />
          </>
        ) : (
          <>
            <Route path="/" element={<Autorize />} />
          </>
        )}
      </Routes>
    </div>
  );
}

export default App;
