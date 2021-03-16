import Container from 'components/container';

export default function Post({ post }) {
    return (
        <Container>
            <article>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
            </article>
        </Container>
    );
}

export async function getServerSideProps({ params }) {
    const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${params.id}`
    );
    const post = await res.json();

    return { props: { post } };
}
