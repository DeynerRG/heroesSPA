import { createContext } from "react";
import { useReducer } from "react";
import { authReducer } from "./authReducer";
import { types } from "../types/types";

const AuthContext = createContext();

const initialState = {
    logged: false
}

const init = ()=>{
    const user = JSON.parse( localStorage.getItem('user') );
    
    if(user){
        return {
            logged: true,
            user
        }
    }
    
    return {
        logged: false
    }    
}
const AuthProvider = ({ children })=>{

    const [ authState, dispatch] = useReducer( authReducer, initialState, init );

    const login = ( name = '')=>{
        const user = {
            id: '123',
            name
        }

        const action = {
            type: types.login,
            payload: user
        }
        dispatch( action )
        localStorage.setItem('user', JSON.stringify( user ) )

    }

    const logout = ()=>{
        localStorage.removeItem('user');
        const action = {
            type: types.logout,
        }
        dispatch( action )
    }

    return (
        <AuthContext.Provider value={{
            authState,
            login,
            logout
        }}>
            { children }
        </AuthContext.Provider>
    )
}

export {
    AuthProvider
}
export default AuthContext;