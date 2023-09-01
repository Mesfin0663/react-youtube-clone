
import React, { useState } from 'react'
export const TitleContext = React.createContext();

function TitleContextProvider({children}) {
    const[title,setTitle] = useState("Music");

  return (
    <TitleContext.Provider value={{title,setTitle}}>
      {children}
    </TitleContext.Provider>
  )
}

export default TitleContextProvider
