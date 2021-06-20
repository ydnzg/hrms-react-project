import axios from "axios"

export default class ResumeLinkService{
    getResumeLinks(){
        return axios.get("http://localhost:8080/api/resumelink/getall")
    }
}