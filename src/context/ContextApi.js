import { createContext, useContext, useEffect, useState } from "react";
import {fetchDataFromApi} from "../utils/Api"

export const Context = createContext()

export const AppContext = ({children}) => {

    const [loading, setLoading] = useState(false)
    const [selectCategories, setSelectCategories] = useState("New")

    useEffect(() => {
        fetchSelectedCategoryData(selectCategories)
    }, [selectCategories])
    
    const fetchSelectedCategoryData = (query) => {
        setLoading(true)
        fetchDataFromApi(`search/?q=${query}`).then(({contents}) => {
            console.log(contents)
            setLoading(false)
        })
    }

    return(
        <Context.Provider value={{
            loading,
            setLoading,
            selectCategories,
            setSelectCategories
        }}>
            {children}
        </Context.Provider>
    )
}

const useData = () => {
    return useContext(Context)
}

export default useData