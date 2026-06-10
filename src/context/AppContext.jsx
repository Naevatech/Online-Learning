import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
axios.defaults.withCredentials = true;
import { useNavigate } from "react-router-dom"; 
// import {loadStripe} from '@stripe/stripe-js';

export const AppContent = createContext()
export const AppContextProvider = (props) => {
    const localBackendUrl = (import.meta.env.VITE_BACKEND_URL || "").trim().replace(/\/$/, "")
    const productionBackendUrl = (import.meta.env.VITE_BACKEND_URL_PROD || "").trim().replace(/\/$/, "")
    const backendUrl = import.meta.env.PROD ? productionBackendUrl : localBackendUrl
    const [isLoggedin, setisLoggedin] = useState(false)
    const [userData, setuserData] = useState(false)
    const [course, setCourse] = useState({})
    const navigate = useNavigate()

    const getAuthState = async () => {

        try {
            const { data } = await axios.get(backendUrl + '/api/auth/is-auth')
            if (data.success) {
                setisLoggedin(true)
                getUserData()
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

    // const stripePromise = loadStripe("pk_test_51TEv0dR8sGg4XYplqSUa0YyOfKYS95vHH4mqvtwMTDQawrhW0vMKooexINm62lM2NRKSDTvnVNozFQDNKNcFuyRv00p9ZFX6Wx");

    const getUserData = async () => {
        try {
            const { data } = await axios.get(backendUrl + '/api/user/data')
            data.success ? setuserData(data.userData.data) : toast.error(data.message)
            console.log(data)
        } catch (error) {
            toast.error(error.message)
        }
    }

    const logUserOut = async () => {
        try {
            const { data } = await axios.post(`${backendUrl}/api/auth/logout`);
            if (data.success) {
                setisLoggedin(false);
                setuserData(false);
                navigate("/login"); // redirect to login
            } else {
                toast.error("Logout failed");
            }
        } catch (error) {
            console.log(error);
            toast.error("Logout failed");
        }
    };

    useEffect(() => {
        getAuthState()
        //   allCourse()
    }, [])



    const value = {
        backendUrl,
        isLoggedin, setisLoggedin,
        userData, setuserData,
        getUserData,
        logUserOut,
        // stripePromise,
        course
    }
    return (
        <AppContent.Provider value={value}>
            {props.children}
        </AppContent.Provider>
    )
}