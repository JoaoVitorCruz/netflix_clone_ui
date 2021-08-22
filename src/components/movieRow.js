import React from 'react';
import './movieRow.css';

const MovieRow = ({title,items}) => {
    
    return (
        <div className="movieRow">
            <h2>{title}</h2>
            <div className="movieRow--listarea">
                <div className="movieRow--list">
                {
                    (items.results.length > 0 && items.results.map((val, key)=>{
                        return (
                            <div className="movieRow--item" key={key}>
                                <img
                                    src={`https://image.tmdb.org/t/p/w300` + val.poster_path}
                                    alt={val.title} 
                                />
                            </div>
                        )
                    }))
                }
                </div>
            </div>
        </div>
    )
}

export default MovieRow