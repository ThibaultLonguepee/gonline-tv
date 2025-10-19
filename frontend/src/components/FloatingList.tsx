import styles from './FloatingList.module.css'

export default function FloatingList({ children }: { children: React.ReactElement[] }) {
    
    if (children.length === 0) {
        return (<></>)
    }

    return (
        <div className={styles.list}>
            {children}
        </div>
    )
}