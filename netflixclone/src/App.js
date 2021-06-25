import React, { useEffect, useState } from 'react';
import './App.css'
import Tmdb from './Tmdb';
import MovieRow from './components/MovieRow';

export default () => {

  const [movieList, setMovieList] = useState ([]);

  useEffect(()=>{
    const loadAll = async () => {
      // pegando a lista Total
      let list = await Tmdb.getHomeList();
      setMovieList(list);
    }

    loadAll();
  }, []);

  return (
    <div className="page">
      <section className="list">
        {movieList.map((item, key)=>(
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </section>
    </div>
  );
}