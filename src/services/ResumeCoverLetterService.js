import axios from "axios"

export default class ResumeCoverLetterService{
    getResumeCoverLetters(){
        return axios.get("http://localhost:8080/api/resumecoverletter/getall")
    }
}