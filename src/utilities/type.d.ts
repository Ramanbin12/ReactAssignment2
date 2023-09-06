export interface movieType{
id:number,
img:string,
moviename:string,
releaseDate:number,
movieType:string,
favouritemovie?:boolean
}
export  interface contextType{
    showNav:boolean;
    setShowNav:React.Dispatch<React.SetStateAction<boolean>>;
    addFav:boolean;
    setAddFav:React.Dispatch<React.SetStateAction<boolean>>
    }