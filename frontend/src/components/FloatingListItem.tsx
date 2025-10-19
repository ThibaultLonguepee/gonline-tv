import styles from './FloatingListItem.module.css'

type Props = {
    value: string
    onClick?: () => void
    active?: boolean
}

export default function FloatingListItem({ value, onClick, active }: Props) {
    return (
        <div className={active ? styles.active : styles.inactive} onClick={onClick}>
            {value}
        </div>
    )
}