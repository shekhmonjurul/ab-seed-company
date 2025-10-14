import { useEffect, useState } from "react";

export default function useFetch(url, option, effect) {
    const [data, setData] = useState()
    const [error, setError] = useState()

    const handleFetch = async () => {
        try {
            const res = await fetch(url, option)
            const data = await res.json()
            setData(data)
        } catch (error) {
            setError(error)
        }
    }

    useEffect(() => {
        handleFetch()
    }, [...effect || []])
    return { data, error}
}