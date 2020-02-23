import {DELETE_MOVIE,EDIT_MOVIE, ADD_MOVIE} from './ActionType'
export const addMovie=(newmovie)=>(
    {type:ADD_MOVIE,
     payload:{...newmovie}}
)
export const deleteMovie=(id)=>(
    {type:DELETE_MOVIE,
     payload:id}
)

export const editMovie=(id,newValue)=>(
    {
        type:EDIT_MOVIE,
        payload:{id,newValue}
    }
)