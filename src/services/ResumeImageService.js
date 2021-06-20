import axios from "axios"

export default class ResumeImageService{
    getResumeImages(){
        return axios.get("http://localhost:8080/api/images/getall")
    }
}