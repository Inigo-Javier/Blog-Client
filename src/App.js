import AppRoutes from "./Routes/AppRoutes.js";
import TopBar from "./components/Topbar/Topbar.js";
import { useContext } from "react";
import { Context } from "./context/AuthContext.js";

function App() {
  const { user } = useContext(Context)
  return (
    <>
      <TopBar user={user}/>
      <AppRoutes user={user} />
    </>
  );
}

export default App;
