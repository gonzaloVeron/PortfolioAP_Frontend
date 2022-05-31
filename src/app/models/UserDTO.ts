export class UserDTO{
    about_me: string;
    background_img: string;
    birth_date: string;
    email: string;
    employment: string;
    id: number;
    name: string;
    nationality: string;
    profile_img: string;
    surname: string;

    constructor(about_me: string, background_img: string, birth_date: string, email: string, employment: string,
        id: number, name: string, nationality: string, profile_img: string, surname: string){
        this.about_me = about_me;
        this.background_img = background_img;
        this.birth_date = birth_date;
        this.email = email;
        this.employment = employment;
        this.id = id;
        this.name = name;
        this.nationality = nationality;
        this.profile_img = profile_img;
        this.surname = surname;
    }

}