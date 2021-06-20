import axios from "axios"

export default class ResumeExperienceService{
    getResumeExperiences(){
        return axios.get("http://localhost:8080/api/resumeexperience/getall")
    }
}