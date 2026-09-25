import React from "react";

function ImdbCard() {
  return <h1>My IMDb Project</h1>;

const movies=[
  {
    rank:1,
    name:"Superman"
  },
  {
    rank:2,
    name:"Batman"
  },
  {
    rank:3,
    name:"Spiderman"
  },
  {
    rank:4,
    name:"Ironman"
  },
  {
    rank:5,
    name:"Divergent"
  },
  {
    rank:6,
    name:"The Hunger Games"
  },
  {
    rank:7,
    name:"The Dark Knight"
  },
  {
    rank:8,
    name:"The avengers"
  },
  {
    rank:9,
    name:"Stuart Little"
  },
  {
    rank:10,
    name:"The Incredibles"
  }
];
  return(
    // <div style={{border:'2px solid black', height:'500px'}}>
    //   <h2 style = {{color:'red'}}>ABES Engineering College</h2>
    //   <ICardGallery />
    // </div>

    <div className="poster">
      <h1>My Top 10</h1>
      <h2>Favourite Movies</h2>
      <p> My personal Picks</p>
      <div className="movies">

      {movies.map((movie) => (
        <div className="movie" key={movie.rank}>

          <h3>{movie.rank}</h3>

          <span>{movie.name}</span>

        </div>
      ))}

    </div>

    </div>
  )
}
  export default ImdbCard;
