import "./App.css";
import Header from "@components/Header";
import Footer from "@components/Footer";
import Drawer from "@components/Drawer";
import { useState, createContext } from "react";
const MainContext = createContext("");
function App({ children }) {
  const [miniCartShow, setMiniCartShow] = useState(false);
  return (
    <MainContext.Provider value={{ miniCartShow, setMiniCartShow }}>
      <Header />
      {children}
      <Drawer />
      <Footer />
    </MainContext.Provider>
  );
}

export default App;
export { MainContext };
