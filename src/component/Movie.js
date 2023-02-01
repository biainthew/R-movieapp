import React from 'react';
import propTypes from 'prop-types';
import './movie.scss'
import {Link} from "react-router-dom"

const Movie = ({id, year, title, summary, poster, genres}) => {
    return (
        <div className='movie'>
            <Link to={`/detail/${id}`}>
                <div className='flex'>
                    <img src={poster} alt={title}></img>
                    <div className='movie_text'>
                        <h3 className='movie_title'>{title}</h3>
                        <h5 className="movie_year">{year}</h5>
                        <ul className='movie_genres'>
                            {genres.map((genres, index)=>{
                                return(
                                    <li key={index}>{genres}</li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
                <div className='movie_data'>
                    
                    <p className="movie_summary">{summary}</p>
                </div>
            </Link>
        </div>
    );
};
Movie.propTypes = {
    year: propTypes.number.isRequired,
    title: propTypes.string.isRequired,
    summary: propTypes.string.isRequired,
    poster: propTypes.string.isRequired,
    genres: propTypes.string.isRequired
};
export default Movie;