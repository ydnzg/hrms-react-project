import axios from "axios"

export default class ResumeLanguageService{
    getResumeLanguages(){
        return axios.get("http://localhost:8080/api/resumelanguage/getall")
    }
}