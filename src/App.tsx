import React, { createContext, useContext, useState } from "react";
import './App.css';
import Rune from './components/Rune';
import Output from './components/Output';


type OutType = {
  outtext: string;
  setOut: (text:string) => void;
};
type AppType = {
  apptext: string;
  setApp: (text:string) => void;
};

export const OutContext = createContext<OutType>({
  outtext: "",
  setOut:() => {
    // HappyHappyHappy
  },
});

export const AppContext = createContext<AppType>({
  apptext: "",
  setApp:() => {
    // HappyHappyHappy
  },
});

function App() {
  const [outtext, setO] = useState<string>("");
  const [apptext, setA] = useState<string>("");

  const setOut = (text: string): void => {
    setO((prev) => text);
  };
  const setApp = (text: string): void => {
    setA((prev) => text);
  };

  const out: OutType = {
    outtext,
    setOut,
  };
  const app: AppType = {
    apptext,
    setApp,
  };

  return (
    <div className="App">
      <OutContext.Provider value={out}>
      <AppContext.Provider value={app}>
        <body className="App-body">
          <p>
            <Output />
          </p>
          <p>
            <Rune id={1} text="I1h?2L" app="ᚠ"/><Rune id={2} text="Vd9n_" app="ᚢ"/><Rune id={3} text="#Dk4" app="ᚦ"/><Rune id={4} text="2xZ*" app="ᚨ"/><Rune id={5} text="q6J#yo" app="ᚱ"/> {'\n'}
            <Rune id={11} text="4DTe_" app="ᛚ"/><Rune id={12} text="v2M?Y" app="ᚷ"/><Rune id={13} text="7b*n3J" app="ᚹ"/><Rune id={14} text="E0Cg#" app="ᚺ"/><Rune id={15} text="?5XK" app="ᚾ"/> {'\n'}
            <Rune id={21} text="qS*3" app="ᛞ"/><Rune id={22} text="s1P_i" app="ᛃ"/><Rune id={23} text="ujF7#" app="ᛇ"/><Rune id={24} text="1?m6D" app="ᛈ"/><Rune id={25} text="k9Kf*" app="ᛉ"/> {'\n'}
            <Rune id={31} text="" app="ᛊ"/><Rune id={32} text="" app="ᛏ"/><Rune id={33} text="" app="ᛒ"/><Rune id={34} text="" app="ᛖ"/><Rune id={35} text="" app="ᛗ"/>
          </p>
        </body>
      </AppContext.Provider>
      </OutContext.Provider>
    </div>
  );
}

export default App;
