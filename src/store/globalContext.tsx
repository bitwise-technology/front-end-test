import {
  useContext,
  createContext,
  useState,
  Dispatch,
  SetStateAction,
  ReactNode
} from 'react'

interface ContextData {
  visibleModal: boolean
  setVisibleModal: Dispatch<SetStateAction<boolean>>
  arrayRepos: any
  setArrayRepos: Dispatch<SetStateAction<any>>
  arrayUsers: any
  setArrayUsers: Dispatch<SetStateAction<any>>
}

export const GlobalContext = createContext({} as ContextData)

export type ContextProvider = {
  children: ReactNode
}

export function ContextProvider({ children }: ContextProvider) {
  const [visibleModal, setVisibleModal] = useState(false)
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
        setArrayUsers
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}

export const useGlobalContextData = () => {
  return useContext(GlobalContext)
}
