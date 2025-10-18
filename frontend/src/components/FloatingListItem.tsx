import styles from './FloatingListItem.module.css'

type Props = {
    value: string
    onClick?: () => void
}

export default function FloatingListItem({ value, onClick }: Props) {
    return (
        <div className={styles.item} onClick={onClick}>
            {value}
        </div>
    )
}