import styles from './Home.module.css'
import FloatingList from "../components/FloatingList";
import FloatingListItem from "../components/FloatingListItem";
import { useState } from 'react';

type ContentType = "LiveStreams" | "Movies" | "Series"

export default function Home() {

    const [contentType, setContentType] = useState<ContentType>("LiveStreams")
    const contentComponentMap = new Map<ContentType, { value: string, element: JSX.Element }>([
        ["LiveStreams", { value: "📺 Live Streams", element: <>Live Streams</> }],
        ["Movies", { value: "🎬 Movies", element: <>Movies</> }],
        ["Series", { value: "▶️ Series", element: <>Series</> }]
    ])

    return (
        <div className={styles.home}>
            <FloatingList>
                {
                    Array.from(contentComponentMap).map(([key, value], _) => (
                        <FloatingListItem value={value.value} onClick={() => setContentType(key)} active={contentType == key} />
                    ))
                }
            </FloatingList>
            {contentComponentMap.get(contentType)?.element}
        </div>
    )
}