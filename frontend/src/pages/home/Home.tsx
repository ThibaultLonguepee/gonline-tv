import styles from './Home.module.css'
import FloatingList from "../../components/FloatingList";
import FloatingListItem from "../../components/FloatingListItem";
import { useState } from 'react';
import { ContentType } from './Types';
import LiveStreamsView from './LiveStreamsView';
import SeriesView from './SeriesView';
import MoviesView from './MoviesView';

const contentComponentMap = new Map<ContentType, { value: string, element: React.ReactElement }>([
    ["LiveStreams", { value: "📺 Live Streams", element: <LiveStreamsView/> }],
    ["Movies", { value: "🎬 Movies", element: <MoviesView/> }],
    ["Series", { value: "▶️ Series", element: <SeriesView/> }]
])

export default function Home() {

    const [contentType, setContentType] = useState<ContentType>("LiveStreams")

    return (
        <div className={styles.home}>
            <FloatingList width={200}>
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