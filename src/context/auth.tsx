import { createContext, useState } from "react";
import { IAuthContext, IAuthContextProviderProps, ILoginData } from "./types";
import { IUser } from "../types/user";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";

export const AuthContext = createContext<IAuthContext>({} as IAuthContext)

export const AuthContextProvider = ({children}: IAuthContextProviderProps) => {
  const [user, setUser] = useState<IUser>({} as IUser);
  const [Loggedin, setIsLoggedin] = useState<boolean>(false);

  const navigate = useNavigate()

  const handleLogin = async (loginData: ILoginData) => {
      try {
        const { data } = await api.get(`/users?email=${loginData.email}&password=${loginData.password}`);
        if (data[0].id = 1) {
          setUser(data[0])
          setIsLoggedin(true)
          navigate('/feed')
        } else {
          alert('email ou senha invalidos')
        }
      } catch {
        alert('Houve um erro, tente novamente')
      }
    }

    const handleLogout = () => {
      setIsLoggedin(false)
    }

  return(
    <AuthContext.Provider value={{user, handleLogin, handleLogout, Loggedin, setIsLoggedin}}>
      {children}
    </AuthContext.Provider>
  ) 
}