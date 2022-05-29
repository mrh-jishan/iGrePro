import React, { createContext, useState } from 'react';
import Api from './Api';

export const AuthContext = createContext(null);

export const ContextProvider = (props) => {

  const [loggedIn, setLoggedIn] = useState(false)
  const [visible, setVisible] = useState(false)
  const [message, setMessage] = useState("")

  const logout = () => {
    setLoggedIn(false)
  }

  const login = (body) => {
    return Api.v1.login(body).then(res => {
      setLoggedIn(true)
      return res
    }).catch(err => {
      setLoggedIn(false)
      toggleDialog()
      setMessage("login failed.")
      return err
    })
  }

  const register = (body) => {
    setLoggedIn(true)
  }

  const toggleDialog = () => {
    console.log("change visible");
    setVisible(!visible)
  }

  return (
    <AuthContext.Provider value={{ loggedIn, login, logout, toggleDialog, visible, message }}>
      {props.children}
    </AuthContext.Provider>
  )

}