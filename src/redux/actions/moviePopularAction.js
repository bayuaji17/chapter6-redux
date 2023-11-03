import { fetchMovie } from "../../services/get-movie"
import { setDataAllMovies } from "../reducers/movie/moviePopularReducer"


export const AllMoviesRedux = () => (dispatch) => {
    fetchMovie().then((result) => {
        dispatch(setDataAllMovies(result.data))
    }).catch((err) => {
       
    })} 
