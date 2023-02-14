const axios = require("axios")
const {API_KEY} = process.env
const {Genre} = require("../db")


const getGamesGenres = async() => {
    
    const api = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page=1`)
    const api2 = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page=2`)
    const api3 = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page=3`)
    const api4 = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page=4`)
    const api5 = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page=5`)

    //concatenamos las paginas de la api
    const allApiGames = [api.data.results, api2.data.results, api3.data.results, api4.data.results, api5.data.results].reduce((acc, val) => acc.concat(val), [])
    
    //mapeamos para encontrar los nombres de los géneros
    const apiGenresAll = allApiGames.map((game) => game.genres.map((genre)=> genre.name))

    //unificando nombres y sacando repetidos
    const union = apiGenresAll.filter((result)=> result != null).join().split(", ").join().split(",");

    let result = union.reduce((a, e) => {
        if(!a.find((d)=>d == e)) a.push(e);
        return a;
    }, [])

    result = result.map((genre)=> {
        return {name:genre}
    })

    //incluimos los generos en la db Genre
    const allGenres = await Genre.findAll();
    if(allGenres.length === 0) {
        await Genre.bulkCreate(result)
    }
     const genre = await Genre.findAll()
    return genre 
    
}

module.exports = {getGamesGenres}