import React, { createContext, useContext, useState } from "react";
import { OutContext } from "../App";
import { AppContext } from "../App";


function Output() {
    const outText = useContext(OutContext);
    const appText = useContext(AppContext);
    return (
        <div className="App-text">
            {'\u200b'}{appText.apptext}
        </div>
      );
}

export default Output;