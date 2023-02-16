import Axios from 'axios'
import {API_TIME_OUT} from "@constants";
import {store} from "../store";
import {showLoading, hideLoading} from "../store/app";


const HttpClient = Axios.create({
    timeout: API_TIME_OUT,
    baseURL: process.env.NEXT_PUBLIC_API_URL
});

HttpClient.interceptors.request.use((config: { headers: { Authorization: string; }; isBackgroundRequest: any; }) => {
    const token = store.getState().app.auth?.authToken
    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }
    // @ts-ignore
    if (config.isBackgroundRequest) {
       return config
    }
    store.dispatch(showLoading())
    return config
})

HttpClient.interceptors.response.use(
    (response: { config: { isBackgroundRequest: any; }; }) => {
        // @ts-ignore
        if (response && !response.config.isBackgroundRequest) {
            store.dispatch(hideLoading())
        }
        return response
    },
    (e) => {
        store.dispatch(hideLoading())
        if (!e.response) {
            return e
        }
        switch (e.response.status) {
            case 400:
                break;
            case 403:
                if (e.response.data.error === 'Forbidden') {
                    return e.response;
                }
                break;
            case 500:
                break
        }
        store.dispatch(hideLoading())
        return e.response
    }
)

export {HttpClient}