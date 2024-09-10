import './Movie.css';
import data from '../data.json';
import heart from '../extra/heart.png'
import rewatch from '../extra/rewatch.png'

function Movie() {
  return (
    <div className="Movie">
        <h1>> letterboxd[:4]</h1>
        <div className='movieitems'>
        {data.movies.map((movie) => (
          <div className="movieitem">
            <button id="movie-button">
                <img id="movieimage" src={movie.image}></img>
            </button>
            <div id="moviecontent">
                <h2 id="movietext">{movie.title}</h2>
                <h2 id="movietext">{movie.date}</h2>
                <div id="movieoptions">
                    {movie.liked && (
                            <img className="movieicon" src={heart} alt="Liked" />
                    )} 
                    {movie.rewatched && (
                            <img className="movieicon" src={rewatch} alt="Rewatched" />
                    )}   
                </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Movie;
