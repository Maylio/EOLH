import React, { createContext, useContext, useReducer } from "react";
import { useState } from 'react';
import { OutContext } from "../App";
import { AppContext } from "../App";

type Properties = {
  id: number
  text: string
  app: string
}

function Rune(runes : Properties) {
      const outText = useContext(OutContext)
      const appText = useContext(AppContext)
      const symPattern = /[^a-zA-Z0-9\s]/g;
      const numPattern = /[/\d+/g]/g;
      const uppPattern = /[A-Z]/g;
      const handleClick = () => {
        switch(runes.id){
          case 31:
            outText.setOut("");
            appText.setApp("");
            break;
          case 32:
            appText.setApp(appText.apptext.replace(symPattern, ''));
            break;
          case 33:
            appText.setApp(appText.apptext.replace(numPattern, ''));
            break;
          case 34:
            appText.setApp(appText.apptext.replace(uppPattern, ''));
            break;
          case 35:
              appText.setApp(outText.outtext);
              break;
          default:
            outText.setOut(outText.outtext + runes.text);
            appText.setApp(appText.apptext + runes.app);
            break;
        }
      };
    return (
        <button className="App-button" onClick={handleClick}>
          {runes.app}
        </button>
      );
}

export default Rune;