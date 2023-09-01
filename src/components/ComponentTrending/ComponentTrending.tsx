import React, { useState } from 'react'
import { heart1, heart2, movie1 } from '../../common/index'
import { trendingMovieData } from "../../utilities/Contants/trendingMovieData"
import { movieType } from '../../utilities/type'
import "../../common/Style.css"
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
            <h1 className='text-white font-poppins m-3 text-2xl '>Trending</h1>
            <div className='flex custom-scrollbar overflow-x-auto gap-4 snap-x'>
                {
                    Movies.map((movie) => {
                        return (
                            <div key={movie.id} className=' flex flex-col '>
                                <div className=" relative w-[300px] bg-slate-200 rounded-[23px]  text-white " >
                                    <img className="w-[300px]  " src={movie.img} />
                                    <button onClick={() => setfavToggle(movie.id)} className="p-[8px] absolute top-2  left-[250px] rounded-[10px] bg-white">
                                        {(movie.favouritemovie ?
                                             (<img src={heart2} /> 
                                             ): (<img src={heart1} />))}</button>
                                    <div className="p-5 text-black">
                                        <h3 className="text-2xl font-bold">{movie.moviename}</h3>
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
