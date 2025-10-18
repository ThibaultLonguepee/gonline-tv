import styles from './FloatingList.module.css'

export default function FloatingList({ children }: { children: JSX.Element | JSX.Element[] }) {
    return (
        <div className={styles.list}>
            {children}
        </div>
    )
}