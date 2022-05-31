export class Experience{
    id: number;
    city: string;
    company_name: string;
    image: string;
    description: string;
    end_date: string;
    start_date: string;
    title: string;

    constructor(id: number, city: string, company_name: string, image: string, description: string, end_date: string, start_date: string, title: string){
        this.id = id;
        this.city = city;
        this.company_name = company_name;
        this.image = image;
        this.description = description;
        this.end_date = end_date;
        this.start_date = start_date;
        this.title = title;
    }

}