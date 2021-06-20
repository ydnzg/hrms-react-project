import axios from "axios"

export default class ResumeSkillService{
    getResumeSkills(){
        return axios.get("http://localhost:8080/api/resumeskills/getall")
    }
}