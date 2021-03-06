import axios from "axios";

export default {
    generateRandomDog: function(){
       return axios.get ("https://dog.ceo/api/breeds/image/random");
    },
    generateSearch: function(breed){
        return axios.get("https://dog.ceo/api/breed/" + breed+ "/images");
    },
    generateBaseBreeds: function(){
        return axios.get("https://dog.ceo/api/breeds/list/all");
    }
}