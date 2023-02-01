import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import './detail.scss'

const Detail = () => {
    const {id} = useParams();
    const [movie, setMovie] = useState();
    const [loading, setLoading] = useState(true);
    const getMovie = async () => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
            setMovie(json.data.movie);
            setLoading(false); //데이터 들어오면 로딩이 안보이게
    }
    useEffect(()=>{
        getMovie();
    },)
    return (
        <div className='movie-detail'>
            {loading ? (
                <div className='loadings'>
                    <span className='loading'>데이터 불러오는 중</span>
                </div>
            ):(
                <div className='movies'>
                    <div style={{flexBasis:'35%'}}>
                        <div className='img-box'>
                            <img src={movie.large_cover_image} alt={movie.title} />
                        </div>
                    </div>
                    <div className="content">
                        <div className="info">
                            <span className='movie-title'>{movie.title}</span>
                            <span className='movie-rating'><b>Rating</b> : {movie.rating}</span>
                            <span className='movie-runtime'><b>Run time</b> : {movie.runtime}</span>
                        </div>
                        <div className="genres">
                            <ul className="list">
                                {
                                    movie.genres.map((item, index)=>{
                                        return(
                                            <li key={index}>{item}</li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                        <div className="summaries">
                            <p className="summarya">{movie.description_full}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Detail;