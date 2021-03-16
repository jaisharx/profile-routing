import Container from 'components/container';
import List from 'components/list';
import Head from 'next/head';
import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Home() {
    const { data, error } = useSWR('https://jsonplaceholder.typicode.com/posts', fetcher);

    if (error) return <div>failed to load</div>;
    if (!data) return <div>loading...</div>;

    return (
        <>
            <Head>
                <title>Profiles - CSR</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Container>
                <List data={data} renderingType="csr" />
            </Container>
        </>
    );
}
