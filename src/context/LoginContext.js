import { createContext, useState } from "react";



export const LoginContext = createContext()

const MOCK_USERS = [
    {
        id: 1,
        email: 'admin@online.com',
        password: 'admin'
    },
    {
        id: 2,
        email: 'christian@online.com',
        password: 'chris'
    },
    {
        id: 3,
        email: 'naty@online.com',
        password: 'nat'
    },
]

export const LoginProvider = ({children}) => {
    const [user, setUser] = useState({
        email: null,
        logged: true
    })

    const login = (values) => {
        const match = MOCK_USERS.find((user) => user.email === values.email && user.password === values.password)

        if (match) {
            setUser({
                email: match.email,
                logged: true
            })
        }
    }

    const logout = () => {
        setUser({
            email: null,
            logged: false
        })
    }

    return (
        <LoginContext.Provider value={{
            user,
            login,
            logout
        }}>
            {children}
        </LoginContext.Provider>
    )
}