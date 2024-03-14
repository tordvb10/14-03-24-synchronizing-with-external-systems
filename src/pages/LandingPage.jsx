import { AlbumList } from "../components/albumList/AlbumList";
import { ArticleList } from "../components/articleList/ArticleList";
import { Button } from "../components/button/Button";

export function LandingPage() {
    return (
        <main>
            <h1>Hello World</h1>
            <section>
                <Button variation="normal">Submit</Button>
                <Button variation="destructive">Submit</Button>
                <Button>Submit</Button>
            </section>

            <section>
                <ArticleList />
            </section>

            <section>
                <AlbumList />
            </section>
        </main>
    )
}