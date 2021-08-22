import React from 'react';
import './featuredMovie.css';

let featuredMovie = ({item}) =>{
    let data = new Date(item.first_air_date)
    console.log(item)

    let genreList = []
    
    item.genres.map((val)=>{
        genreList.push(val.name)
    })

    return (
        <section className="featured" style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover'
        }}>
            <div className="featured--vertical">
                <div className="featured--horizontal">
                    <div className="featured--name">{item.name}</div>
                    <div className="featured--info">
                        <div className="featured--points">Nota: {item.vote_average}</div>
                        <div className="featured--year">{data.getFullYear()}</div>
                        <div className="featured--seasons">{item.number_of_seasons} temporada{item.number_of_seasons != 1 ? 's': ''}</div>
                        <div className="featured--description">{item.overview}</div>
                        <div className="buttons">
                            <a href={`/watch/${item.id}`} className="featured--watchButton">► Assistir</a>
                            <a href={`/list/add/${item.id}`} className="featured--listButton">+ Minha lista</a>
                        </div>
                        <div className="featured--genres"><strong>Gêneros: </strong>{genreList.join(', ')}</div>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default featuredMovie;