import { useEffect, useState } from "react";
import { GetVodDetails, GetVodUrl, ListVodCategories, ListVods } from '../../../wailsjs/go/main/App'
import FloatingListItem from "../../components/FloatingListItem";
import FloatingList from "../../components/FloatingList";
import { models } from "../../../wailsjs/go/models";
import styles from "./MoviesView.module.css"

export default function LivemoviesView() {

    const [categories, setCategories] = useState<models.Category[]>([])
    const [selectedCategory, setSelectedCategory] = useState<models.Category>()

    const [movies, setMovies] = useState<models.Vod[]>([])
    const [selectedMovie, setSelectedMovie] = useState<models.Vod>()
    const [movieDetails, setMovieDetails] = useState<models.VodDetails>()
    const [movieUrl, setMovieUrl] = useState("")
    const [showUrl, setShowUrl] = useState(false)
    const [status, setStatus] = useState("")

    useEffect(() => {
        ListVodCategories()
            .then(result => setCategories(result))
            .catch()
    }, [])

    function selectCategory(category: models.Category) {
        setSelectedCategory(category)
        setSelectedMovie(undefined)
        ListVods(category.Id)
            .then(result => setMovies(result))
            .catch()
    }

    function selectMovie(movie: models.Vod) {
        setSelectedMovie(movie)
        setShowUrl(false)
        setStatus("")
        GetVodDetails(movie.Id)
            .then(result => { setMovieDetails(result); console.log(result) })
            .catch()
        GetVodUrl(movie.Id)
            .then(result => setMovieUrl(result))
            .catch()
    }

    function copyUrl() {
        navigator.clipboard.writeText(movieUrl)
        setStatus("✅ Copied URL to the Clipboard!")
    }

    function toggleShowUrl() {
        setShowUrl(showUrl => (!showUrl))
    }

    function shortenNumber(value: number): string {
        if (value < 1000)
            return value.toString()
        else if (value < 1_000_000)
            return (value / 1000).toFixed(1) + "k"
        return (value / 1_000_000).toFixed(1) + "M"
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
                    movies?.map((movie, _) => (
                        <FloatingListItem value={movie.Name} onClick={() => selectMovie(movie)} active={movie.Id === selectedMovie?.Id} />
                    ))
                }
            </FloatingList>
            {
                movieDetails != undefined &&
                <div className={styles.details}>
                    <span className={styles.title}>{movieDetails.Name || selectedMovie?.Name}</span>
                    <div className={styles.section}>
                        <span>⌛ {Math.floor(movieDetails.Duration / 60)} minutes</span>
                        {
                            Date.parse(movieDetails.RealeaseDate) >= 0 &&
                            <span>📅 {(new Date(movieDetails.RealeaseDate)).toLocaleDateString()}</span>
                        }
                        <span>⭐ {movieDetails.Rating.toFixed(1)}<span className={styles.label}>/10 ({shortenNumber(movieDetails.RatingCount)})</span></span>
                    </div>
                    <div className={styles.section}>
                        <span className={styles.label}>🔗 URL</span>
                        <div className={styles.url}>
                            <input type={showUrl ? 'text' : 'password'} value={movieUrl} size={30} readOnly={true} />
                            <button className={styles.show} onClick={() => toggleShowUrl()}>👀</button>
                            <button className={styles.copy} onClick={() => copyUrl()}>Copy</button>
                        </div>
                        {
                            status != "" && <span className={styles.status}>{status}</span>
                        }
                    </div>
                    <div className={styles.section}>
                        <span className={styles.label}>📝 Details</span>
                        <span className={styles.content}>{movieDetails.Plot}</span>
                    </div>
                    {
                        movieDetails.Backdrops.length > 0 &&
                        <div className={styles.section}>
                            <span className={styles.label}>🖼️ Pictures</span>
                            <img className={styles.cover} src={movieDetails.Backdrops[0]}></img>
                        </div>
                    }
                    {
                        movieDetails.Cast.length > 0 &&
                        <div className={styles.section}>
                            <span className={styles.label}>🎭 Cast</span>
                            <span>{movieDetails.Cast.join(", ")}</span>
                        </div>
                    }
                    {
                        movieDetails.Directors.length > 0 &&
                        <div className={styles.section}>
                            <span className={styles.label}>👨‍💼 Directors</span>
                            <span>{movieDetails.Directors.join(", ")}</span>
                        </div>
                    }
                </div>
            }
        </>
    )
}