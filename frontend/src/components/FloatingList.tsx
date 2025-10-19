import styles from './FloatingList.module.css'

export default function FloatingList({ children }: { children: React.ReactNode }) {
    return (
        <div className={styles.list}>
            {children}
        </div>
    )
}