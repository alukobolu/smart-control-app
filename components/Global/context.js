import React, { useState, useEffect, useRef, createContext} from "react";
const Context = createContext()

const Provider = ( { children } ) => {

  const [ isLoggedIn, setIsLoggedIn ] = useState(false)
  const [ managingDevice, setManagingDevice ] = useState(true)

  const globalContext = {
    isLoggedIn,
    setIsLoggedIn,
    managingDevice, 
    setManagingDevice,
  }

  return <Context.Provider value={globalContext}>{children}</Context.Provider>

};

export { Context, Provider };