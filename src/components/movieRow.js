import React, { useState } from 'react';
import './movieRow.css';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

const MovieRow = ({title,items}) => {
    const [scrollX,setScrollX] = useState(0)

    const handleLeftArrow = () => {
        let x = scrollX + Math.round(window.innerWidth / 2)
    
        if(x > 0 ) {
            x = 0 
        } 
    
        setScrollX(x)
    }
    
    const handleRightArrow = () => {
        let x = scrollX - Math.round(window.innerWidth / 2)
        let maxWidth = items.results.length * 150

        if((window.innerWidth - maxWidth) > x) {
            x = (window.innerWidth - maxWidth) - 30
        } 
    
        setScrollX(x)
    }

    return (
        <div className="movieRow">
            <h2>{title}</h2>
            <div className="movieRow--listarea">
                <div className="movieRow--list"
                style={
                    {
                        marginLeft: scrollX,
                        width: items.results.length * 150,
                    }
                }>
                <NavigateBeforeIcon className="movieRow--before" onClick={handleLeftArrow}/>
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
                <NavigateNextIcon className="movieRow--next" onClick={handleRightArrow}/>
                </div>
            </div>
        </div>
    )
}

export default MovieRow