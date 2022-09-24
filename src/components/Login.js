import { Button } from "@mui/material";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useContext } from "react";
import { Context } from "../context/contextAuth";

const Login = () => {
  const { setUserData, auth } = useContext(Context);

  const login = async () => {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    setUserData(user);
    console.log(user);
  };
  return (
    <div
      className="login"
      style={{
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        height: "40vh",
      }}
    >
      <main className="login__title" style={{ textAlign: "center" }}>
        <h1>Добро пожаловать в LIVE CHAT</h1>
        <h2>Войти с помощью Google</h2>
        <Button variant="contained" color="success" onClick={login}>
          Войти
        </Button>
      </main>
    </div>
  );
};

export default Login;
