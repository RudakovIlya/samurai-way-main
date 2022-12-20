import React, {FC} from 'react'
import {StoreType} from "./reduxStore";

export const StoreContext = React.createContext({} as StoreType);

export type ProviderType = {
    store: StoreType
    children: React.ReactNode
}

export const Provider: FC<ProviderType> = ({store, children}) => {
    return (
        <StoreContext.Provider value={store}>
            {children}
        </StoreContext.Provider>
    )
}