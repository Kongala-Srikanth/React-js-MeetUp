import React from 'react'

const RegisterContext = React.createContext({
  userName: '',
  topic: '',
  changeUsername: () => {},
  changeTopic: () => {},
})

export default RegisterContext
