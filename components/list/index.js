import Link from 'next/link';
import styles from './styles.module.scss';

function List({ data }) {
    return (
        <ul className={styles.list}>
            {data.map((item) => (
                <li>
                    <Link href={`/posts/${item.id}`}>
                        <a>{item.title}</a>
                    </Link>
                </li>
            ))}
        </ul>
    );
}

export default List;