import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/content";
import { createContext, useState } from "react";

export let userContext = createContext();

function App() {
  let [user, setUser] = useState({
    name: "John Doe",
    age: 30,
    email: "user@gmail.com",
  });

  return (
    <userContext.Provider value={{ user }}>
      <div className="App">
        <Header />
        <Content />
        <Footer />
      </div>
    </userContext.Provider>
  );
}

export default App;
