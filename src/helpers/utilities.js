export const tokenConfig = (getState) => {
    const token = getState().auth.token
    const config = {
        headers: {
            "Content-Type": "application/json",
            timeout: 30,
            timeoutErrorMessage: "Request could not be completed (timeout(30))"
        }
    }
    if(token){
        config.headers["Authorization"] = `Bearer ${token}`
    }
    return config
}

export const showError = (err) => {
    if (err.response){
        return err.response.data['errorMessage']
    } else{
        return "Network Connection failed"
    }
}

