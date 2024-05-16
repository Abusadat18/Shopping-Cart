import React, { useEffect, useState } from 'react'

function useData() {

    const [products, setProducts] = useState([])
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch("https://fakestoreapi.com/products",{mode: 'cors'})
        .then((response) => {
            if(response.status >= 400){
                throw new Error("Server Error")
            }
            return response.json()
        })
        .then((data) => setProducts(data))
        .catch((error) => setError(error))
        .finally(() => setLoading(false))

    },[])

    return [products, error, loading]
}

export default useData