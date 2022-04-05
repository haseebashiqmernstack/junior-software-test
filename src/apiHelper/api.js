import axios from 'axios';

const apiServices=()=>{
    const getMovies=()=>{
        return axios.get("https://jsonmock.hackerrank.com/api/movies")
        .then(res=>res.data)
    }
const getMovieByTitles=(title)=>{
    console.log(title)
    return axios.get(`https://jsonmock.hackerrank.com/api/movies/search/?Title=${title}&page=1`)
    .then(res=>res.data)
}
// Task Three Api
const getAllStack=()=>{
    return axios.get("https://jsonmock.hackerrank.com/api/stocks")
    .then(res=>res.data)
}
const getStockByDate=(date)=>{
    console.log(date)
    return axios.get(` https://jsonmock.hackerrank.com/api/stocks?date=${date}`)
    .then(res=>res.data)
}
    return {
        getMovies,
        getMovieByTitles,
        getAllStack,
        getStockByDate
    }
}
export default apiServices();