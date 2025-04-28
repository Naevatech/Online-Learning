import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

export const AppContent = createContext()
export const AppContextProvider = (props) => {
    const backendUrl = import.meta.env.VITE_BACKEND_URL 
    const [isLoggedin, setisLoggedin] = useState(false)
    const [userData, setuserData] = useState(false)
    const [course, setCourse] = useState({})
    
    const getAuthState = async () => {
        try {
            const {data} = await axios.get(backendUrl + '/api/auth/is-auth')
            if (data.success) {
                setisLoggedin(true)
                getUserData()
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

    const getUserData = async () => {
        try {
            const {data} = await axios.get(backendUrl + '/api/user/data')
            data.success ? setuserData(data.userData.data) : toast.error(data.message)
            console.log(data)
        } catch (error) {
            toast.error(error.message)
        }
    }
 
    useEffect(() => {
      getAuthState()
    //   allCourse()
    }, [])
    


    const value = {
        backendUrl,
        isLoggedin, setisLoggedin,
        userData, setuserData, 
        getUserData,
        course
    }
    return(
        <AppContent.Provider value={value}>
            {props.children}
        </AppContent.Provider>
    )
}