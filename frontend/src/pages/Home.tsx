import styles from './Home.module.css'
import FloatingList from "../components/FloatingList";
import FloatingListItem from "../components/FloatingListItem";

export default function Home() {
    return (
        <div className={styles.home}>
            <FloatingList>
                <FloatingListItem value="📺 Live Streams" />
                <FloatingListItem value="📼 Movies" />
                <FloatingListItem value="▶️ Series" />
            </FloatingList>
        </div>
    )
}