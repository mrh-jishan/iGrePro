import React, { createContext, useEffect, useState } from 'react';
import Api from './Api';
import { getData, storeData } from './storage';

export const AuthContext = createContext(null);

export const ContextProvider = (props) => {

  const [loggedIn, setLoggedIn] = useState(false)
  const [visible, setVisible] = useState(false)
  const [message, setMessage] = useState("")
  const [token, setToken] = useState("")

  const logout = () => {
    setLoggedIn(false)
  }

  const login = (body) => {
    return Api.v1.login(body).then(res => {
      setLoggedIn(true)
      const { data } = res.data
      storeData(data)
      return data
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

  useEffect(() => {
    console.log("check login here from localhost");
    getData("token").then(data => {
      if (data) {
        setToken(data.token)
        setLoggedIn(true)
      }
    }).catch(err => {
      console.log("error in effect get data");
    })
  }, [])

  return (
    <AuthContext.Provider value={{ loggedIn, login, logout, toggleDialog, visible, message, token }}>
      {props.children}
    </AuthContext.Provider>
  )

}