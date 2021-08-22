import React, {useEffect, useState} from 'react';
import Tmdb from './Tmdb';
import MovieRow from './components/movieRow';
import FeaturedMovie from './components/featuredMovie';
import Header from './components/header';
import './App.css';

function rand(min, max) {
  return Math.round(Math.random() * (max - min) + min)
}

function App() {
  const [movieList, setMovieList] = useState([])
  const [featuredData, setFeaturedData] = useState(null)
  
  useEffect(()=>{
    const loadAll = async () => {
      let list = await Tmdb.getHomeList();
      setMovieList(list)
      
      let r1 = list[0]
      let chosenMovie = r1.items.results[rand(1,r1.items.results.length-1)]
      let chosenData = await Tmdb.getMovieInfo(chosenMovie.id, 'tv')
      setFeaturedData(chosenData)
    }
    
    loadAll()
  },[])

  return (
    <div className="page">
      <Header/>

      {
        (featuredData && 
          <FeaturedMovie item={featuredData}/>
        ) 
      }      

      <section className="lists">
        {
          movieList.map((item,key)=>{
            return (
              <MovieRow key={key} title={item.title} items={item.items}/>
              )
            })
          }
      </section>           
    </div>
  );
}

export default App;
