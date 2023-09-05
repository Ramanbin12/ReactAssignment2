import React,{useContext} from 'react'
import { trendingMovieData } from '../../utilities/Contants/trendingMovieData'
import {heart1,heart2} from "../../common/index"
import {AppContext} from "../index"
const ComponentFav = () => {
    const { addFav, setAddFav } = useContext(AppContext)
    const setfavToggle = (id: number) => {
       
        const index = trendingMovieData.findIndex(e => e.id === id);
        
        trendingMovieData[index] = { ...trendingMovieData[index], favouritemovie: !trendingMovieData[index].favouritemovie }
        console.log(trendingMovieData[index]);
    setAddFav(!addFav);
     
    }
    const favmovie=trendingMovieData.filter((item)=>item.favouritemovie===true)
  return (
    <div className="">
     <h1 className='text-white m-3 text-2xl '>Continue Watching</h1>
            <div className='flex custom-scrollbar overflow-x-auto gap-4 snap-x'>
                {
                    favmovie.map((movie) => {
                        return (
                            <div key={movie.id} className=' flex flex-col '>
                                <div className="relative  w-[348px]  rounded-[20px] text-white " >
                                    <img className=" h-[259px] w-[348px]" src={movie.img} />
                                    <button onClick={() => setfavToggle(movie.id)} className="p-[8px] absolute top-4  left-[300px] rounded-[8px] bg-white">
                                        {(movie.favouritemovie ?
                                             (<img src={heart2} /> 
                                             ): (<img src={heart1} />))}</button>
                                    <div className="p-5 bg-slate-200 relative bottom-4 rounded-b-[23px] text-black">
                                        <h3 className="text-2xl font-bold">{movie.moviename}</h3>
                                        <p >{movie.releaseDate} | {movie.movieType}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div> 
    </div>
  )
}

export default ComponentFav
