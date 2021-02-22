import Container from 'components/container';
import List from 'components/list';
import Head from 'next/head';

export default function Home({ data }) {
    return (
        <>
            <Head>
                <title>Profiles</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Container>
                <List data={data} />
            </Container>
        </>
    );
}

export async function getStaticProps(context) {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();

    return {
        props: {
            data: data,
        }, // will be passed to the page component as props
    };
}
