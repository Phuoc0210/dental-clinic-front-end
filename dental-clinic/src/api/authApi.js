import axiosClient from "./axios"

const authApi = {   
    login: (data) => {
        return axiosClient.post("/api/authentication/login",data);
    },
    signup: (data) => {
        return axiosClient.post("/api/authentication/signup",data)
    }
}

export default authApi;