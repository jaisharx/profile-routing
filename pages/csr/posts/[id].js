import Container from 'components/container';
import { useRouter } from 'next/router';
import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Post() {
    const router = useRouter();

    const { data, error } = useSWR(
        `https://jsonplaceholder.typicode.com/posts/${router.query.id}`,
        fetcher
    );

    console.log(data);

    if (error) return <div>failed to load</div>;
    if (!data) return <div>loading...</div>;

    return (
        <Container>
            <article>
                <h2>{data.title}</h2>
                <p>{data.body}</p>
            </article>
        </Container>
    );
}
