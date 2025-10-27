import { useEffect, useState } from "react";
import { GetLiveStreamUrl, ListLiveCategories, ListLiveStreams } from '../../../wailsjs/go/main/App'
import FloatingListItem from "../../components/FloatingListItem";
import FloatingList from "../../components/FloatingList";
import { models } from "../../../wailsjs/go/models";
import styles from "./LiveStreamsView.module.css"

export default function LiveStreamsView() {

    const [categories, setCategories] = useState<models.Category[]>([])
    const [selectedCategory, setSelectedCategory] = useState<models.Category>()

    const [streams, setStreams] = useState<models.LiveStream[]>([])
    const [selectedStream, setSelectedStream] = useState<models.LiveStream>()
    const [streamUrl, setStreamUrl] = useState("")
    const [showUrl, setShowUrl] = useState(false)
    const [status, setStatus] = useState("")

    useEffect(() => {
        ListLiveCategories()
            .then(result => setCategories(result))
            .catch()
    }, [])

    function selectCategory(category: models.Category) {
        setSelectedCategory(category)
        ListLiveStreams(category.Id)
            .then(result => setStreams(result))
            .catch()
    }
    
    function selectStream(stream: models.LiveStream) {
        setSelectedStream(stream)
        setShowUrl(false)
        setStatus("")
        GetLiveStreamUrl(stream.Id)
            .then(result => setStreamUrl(result))
            .catch()
    }

    function copyUrl() {
        navigator.clipboard.writeText(streamUrl)
        setStatus("✅ Copied URL to the Clipboard!")
    }
    
    function toggleShowUrl() {
        setShowUrl(showUrl => (!showUrl))
    }

    return (
        <>
            <FloatingList>
                {
                    categories?.map((category, _) => (
                        <FloatingListItem value={category.Name} onClick={() => selectCategory(category)} active={category.Id === selectedCategory?.Id} />
                    ))
                }
            </FloatingList>
            <FloatingList>
                {
                    streams?.map((stream, _) => (
                        <FloatingListItem value={stream.Name} onClick={() => selectStream(stream)} active={stream.Id === selectedStream?.Id} />
                    ))
                }
            </FloatingList>
            {
                selectedStream != undefined && <div className={styles.details}>
                    <div className={styles.top}>
                        <img src={selectedStream?.Icon}></img>
                        <span className={styles.title}>{selectedStream.Name}</span>
                    </div>
                    <div className={styles.section}>
                        <span className={styles.label}>URL</span>
                        <div className={styles.url}>
                            <input type={showUrl ? 'text' : 'password'} value={streamUrl} size={30} readOnly={true} />
                            <button className={styles.show} onClick={() => toggleShowUrl()}>👀</button>
                            <button className={styles.copy} onClick={() => copyUrl()}>Copy</button>
                        </div>
                        {
                            status != "" && <span className={styles.status}>{status}</span>
                        }
                    </div>
                </div>
            }
        </>
    )
}