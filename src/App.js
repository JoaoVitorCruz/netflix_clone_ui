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
  const [blackHeader,setBlackHeader] = useState(false)

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

  useEffect(()=>{
    //const height = window.innerHeight
    window.addEventListener('scroll', ()=>{
      if((40) <= window.pageYOffset) {
        setBlackHeader(true)
      } else {
        setBlackHeader(false)
      }
    })

  },[])

  return (
    <div className="page">
      <Header black = {blackHeader}/>


      <div className={movieList.length?'disabled':'loading'}>
        <img src="https://i.pinimg.com/originals/28/47/2d/28472d243bc5b02178de348812e0792e.gif" alt="Carregando...."/>
      </div>


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

      <footer>
          <div className="footer--tmdbLink">
            Dados fornecidos pela <a href='https://www.themoviedb.org/'>TMBD</a>
          </div>
          <div className="footer--netflixLink">
            direitos de imagem: <a href='https://www.themoviedb.org/'>Netflix</a>
          </div>
      </footer>
    </div>
  );
}

export default App;
