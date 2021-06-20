import axios from "axios"

export default class ResumeEducationService{
    getResumeEducations(){
        return axios.get("http://localhost:8080/api/resumeeducation/getall")
    }
}