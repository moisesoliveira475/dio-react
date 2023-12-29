import { useContext } from "react"
import { AuthContext } from "../context/auth"

export const useAuth = () => {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error('Nao existe u contexto de autenticacao')
  }
  return context
}