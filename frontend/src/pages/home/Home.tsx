import styles from './Home.module.css'
import FloatingList from "../../components/FloatingList";
import FloatingListItem from "../../components/FloatingListItem";
import { useState } from 'react';
import { ContentType } from './Types';
import LiveStreamView from './LiveStreamView';

const contentComponentMap = new Map<ContentType, { value: string, element: React.ReactElement }>([
    ["LiveStreams", { value: "📺 Live Streams", element: <LiveStreamView/> }],
    ["Movies", { value: "🎬 Movies", element: <>Movies</> }],
    ["Series", { value: "▶️ Series", element: <>Series</> }]
])

export default function Home() {

    const [contentType, setContentType] = useState<ContentType>("LiveStreams")

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