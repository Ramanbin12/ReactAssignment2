import React, { useState } from 'react'
import { heart1, heart2, movie1 } from '../../common/index'
import { trendingMovieData } from "../../utilities/Contants/trendingMovieData"
import { movieType } from '../../utilities/type'
const ComponentTrending = () => {
    const [Movies, setMovie] = useState<movieType[]>(trendingMovieData)
    const setfavToggle = (id: number) => {
        setMovie((prevdata) =>
         prevdata.map((movie) =>
          movie.id === id ? { ...movie, favouritemovie : !movie.favouritemovie }:movie
          ))
    }
    return (
        <>
            <h1 className='text-white m-3 text-2xl '>Trending</h1>
            <div className='flex overflow-x-auto gap-4 snap-x'>
                {
                    Movies.map((movie) => {
                        return (
                            <div key={movie.id} className=' flex flex-col '>
                                <div className="relative w-[255px] bg-slate-200 rounded-[20px] text-white " >
                                    <img src={movie.img} />
                                    <button onClick={() => setfavToggle(movie.id)} className="p-[8px] absolute top-2  left-[200px] rounded-[8px] bg-white">
                                        {(movie.favouritemovie ?
                                             (<img src={heart2} /> 
                                             ): (<img src={heart1} />))}</button>
                                    <div className="p-5 text-black">
                                        <h3 >{movie.moviename}</h3>
                                        <p >{movie.releaseDate} | {movie.movieType}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

        </>
    )
}

export default ComponentTrending
