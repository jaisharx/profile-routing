import Link from 'next/link';

function Card({ url, children }) {
    return (
        <div className="appcard">
            <h1>
                <Link href={url}>
                    <a>{children}</a>
                </Link>
            </h1>
        </div>
    );
}

export default function Home() {
    return (
        <div className="appcontainer">
            <Card url="csr">CSR</Card>
            <Card url="ssg">SSG</Card>
            <Card url="ssr">SSR</Card>
        </div>
    );
}
