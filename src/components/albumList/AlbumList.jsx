import { useFetch } from "../../hooks/useFetch"
import { ErrorMessage } from "../errorMessage/ErrorMessage"
import { LoadingSpinner } from "../loadingSpinner/LoadingSpinner"

const url = "https://jsonplaceholder.typicode.com/albums"

export function AlbumList() {
    const { isLoading, data, error } = useFetch(url)

    return (
        <ul>
            {
                isLoading ? <LoadingSpinner />
                    : error ? <ErrorMessage message={error} />
                        : data.map((album) => {
                            return (
                                <li key={album.id}>
                                    {album.title}
                                </li>
                            )
                        })
            }
        </ul>
    )
}