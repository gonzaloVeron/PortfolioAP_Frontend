import { Education } from "./Education";
import { Experience } from "./Experience";
import { Project } from "./Project";
import { Skill } from "./Skill";
import { UserDTO } from "./UserDTO";

export class User{
    about_me: string;
    background_img: string;
    birth_date: string;
    educations: Array<Education>;
    email: string;
    employment: string;
    experiences: Array<Experience>;
    id: number;
    name: string;
    nationality: string;
    profile_img: string;
    projects: Array<Project>;
    skills: Array<Skill>;
    surname: string;

    constructor(about_me: string, background_img: string, birth_date: string, educations: Array<Education>, email: string, employment: string,
        experiences: Array<Experience>, id: number, name: string, nationality: string, profile_img: string, projects: Array<Project>,
        skills: Array<Skill>, surname: string){
        this.about_me = about_me;
        this.background_img = background_img;
        this.birth_date = birth_date;
        this.educations = educations;
        this.email = email;
        this.employment = employment;
        this.experiences = experiences;
        this.id = id;
        this.name = name;
        this.nationality = nationality;
        this.profile_img = profile_img;
        this.projects = projects;
        this.skills = skills;
        this.surname = surname;
    }

    public static userUpdate(name: string, surname: string , employment: string, id: number) {
        return new UserDTO(null, null, null, null, employment, id, name, null, null, surname);
    }

    public static aboutMeUpdate(description: string, id: number){
        return new UserDTO(description, null, null, null, null, id, null, null, null, null);
    }

}