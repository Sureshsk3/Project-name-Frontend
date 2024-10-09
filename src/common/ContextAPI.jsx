import React from 'react'
export const AllContext = React.createContext()
function ContextAPI({children}) {
    const data = []
  return (
    <AllContext.Provider value={{data}}>{children}</AllContext.Provider>
  )
}

export default ContextAPI