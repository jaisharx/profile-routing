import Container from 'components/container';
import List from 'components/list';
import Head from 'next/head';

export default function ServerSideRendering({ data }) {
    return (
        <>
            <Head>
                <title>Profiles - SSR</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Container>
                <List data={data} renderingType="ssr" />
            </Container>
        </>
    );
}

export async function getServerSideProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();

    return {
        props: {
            data: data,
        }, // will be passed to the page component as props
    };
}
