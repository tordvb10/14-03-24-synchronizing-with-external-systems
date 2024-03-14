import { useFetch } from "../../hooks/useFetch"
import { ErrorMessage } from '../errorMessage/ErrorMessage'
import { LoadingSpinner } from '../loadingSpinner/LoadingSpinner'

const url = "https://api.realworld.io/api/articles?limit=20"

export function ArticleList() {
    const { isLoading, data, error } = useFetch(url)

    return (
        <div>
            <ul>
                {
                    isLoading ? <LoadingSpinner />
                        : error ? <ErrorMessage message={error} />
                            : data.articles.map((article) => {
                                return (
                                    <li key={article.slug}>
                                        <ArticleCard article={article} />
                                    </li>
                                )
                            })
                }
            </ul>
        </div>
    )
}

function ArticleCard(properties) {
    const { article } = properties

    return (
        <article>
            <h2>{article.title}</h2>
            <p>{article.description}</p>
        </article>
    )
}
