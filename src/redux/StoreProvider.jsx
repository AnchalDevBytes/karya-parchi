"use client"
import { Store } from "./store"
import { Provider } from "react-redux"

const StoreProvider = ({children}) => {
    return (
        <Provider store={Store}>
            {children}
        </Provider>
    )
}

export default StoreProvider;