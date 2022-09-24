import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import Navbar from "./components/Navbar";
import { Context } from "./context/contextAuth";
import { getAuth, onAuthStateChanged } from "firebase/auth";

function App() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const auth = getAuth();

  onAuthStateChanged(auth, (user) => {
    setUserData(user);
  });

  console.log(userData);
  return (
    <div className="App">
      <Context.Provider
        value={{ userData, setUserData, auth, setLoading, loading }}
      >
        <BrowserRouter>
          <Navbar />
          <AppRouter userData={userData} setUserData={setUserData} />
        </BrowserRouter>
      </Context.Provider>
    </div>
  );
}

export default App;
