import {
  useContext,
  createContext,
  useState,
  ReactNode,
  ChangeEvent
} from 'react'
import {ContextData} from 'src/types'

export const GlobalContext = createContext({} as ContextData)

export type ContextProvider = {
  children: ReactNode
  toggleTheme: (e: ChangeEvent<HTMLInputElement>) => void
}

export function ContextProvider({ children, toggleTheme }: ContextProvider) {
  const [visibleModal, setVisibleModal] = useState(false)
  const [changeTheme, setChangeTheme] = useState(false)
  const [arrayRepos, setArrayRepos] = useState([])
  const [arrayUsers, setArrayUsers] = useState([])

  return (
    <GlobalContext.Provider
      value={{
        visibleModal,
        setVisibleModal,
        arrayRepos,
        setArrayRepos,
        arrayUsers,
        setArrayUsers,
        changeTheme,
        setChangeTheme,
        toggleTheme
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}

export const useGlobalContextData = () => {
  return useContext(GlobalContext)
}
