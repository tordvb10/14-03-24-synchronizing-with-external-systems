import { useState, useEffect } from "react"

export function useFetch(url) {
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)

    // Derive the value based on the stateful variables
    const isLoading = data === null && error === null

    useEffect(
        () => {
            async function fetchData() {
                try {
                    const response = await fetch(url)

                    if (!response.ok) {
                        setError("Server responded with:", response.status)
                        return
                    }

                    const data = await response.json()
                    setData(data)
                } catch (error) {
                    setError("An error occured, please refresh page")
                }
            }

            fetchData()
        },
        []
    )

    return {
        isLoading,
        data,
        error,
    }
}