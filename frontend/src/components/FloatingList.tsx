import styles from './FloatingList.module.css'

export default function FloatingList({ width = 350, children }: { width?: number, children: React.ReactElement[] }) {
    
    if (children.length === 0) {
        return (<></>)
    }

    return (
        <div className={styles.list} style={{minWidth: width, maxWidth: width}}>
            {children}
        </div>
    )
}