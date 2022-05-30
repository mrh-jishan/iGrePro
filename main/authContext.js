import React, { createContext, useEffect, useState } from 'react';
import Api from './Api';
import { cleanToken, getData, storeData } from './storage';

export const AuthContext = createContext(null);

export const ContextProvider = (props) => {

  const [loggedIn, setLoggedIn] = useState(false)
  const [visible, setVisible] = useState(false)
  const [message, setMessage] = useState("")
  const [token, setToken] = useState("")

  const logout = () => {
    cleanToken().then(res => {
      setLoggedIn(false)
    }).catch(err => {
      setLoggedIn(false)
    })
  }

  const login = async (body) => {
    return await Api.v1.login(body).then(async (res) => {
      console.log("login response: ", res);
      const data = res.data
      await storeData(data)
      setLoggedIn(true)
      return data
    }).catch(err => {
      setLoggedIn(false)
      toggleDialog()
      setMessage("login failed.")
      return err
    })
  }

  const register = async (body) => {
    setLoggedIn(true)
  }

  const toggleDialog = () => {
    console.log("change visible");
    setVisible(!visible)
  }

  useEffect(() => {
    console.log("check login here from localhost");
    getData().then(data => {
      if (data) {
        setToken(data.token)
        setLoggedIn(true)
      }
    }).catch(err => {
      console.log("error in effect get data");
      setLoggedIn(false)
    })
  }, [])

  return (
    <AuthContext.Provider value={{
      loggedIn,
      login,
      logout,
      toggleDialog,
      visible,
      message,
      token
    }}>
      {props.children}
    </AuthContext.Provider>
  )

}