export class Education{
    average: number;
    career: string;
    end_year: number;
    id: number;
    image: string;
    institution: string;
    start_year: number;
    title: string;

    constructor(average: number, career: string, end_year: number, id: number, image: string,
        institution: string, start_year: number, title: string){
        this.average = average;
        this.career = career;
        this.end_year = end_year;
        this.id = id;
        this.image = image;
        this.institution = institution;
        this.start_year = start_year;
        this.title = title;
    }
}