import Link from 'next/link';
import styles from './styles.module.scss';

function List({ data }) {
    return (
        <ol className={styles.list}>
            {data.map((item) => (
                <li key={item.id}>
                    <Link href={`/posts/${item.id}`}>
                        <a>{item.title}</a>
                    </Link>
                </li>
            ))}
        </ol>
    );
}

export default List;
