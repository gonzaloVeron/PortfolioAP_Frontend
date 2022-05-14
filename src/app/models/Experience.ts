export class Experience{
    city: string;
    company_name: string;
    description: string;
    end_date: string;
    start_date: string;
    title: string;

    constructor(city: string, company_name: string, description: string, end_date: string, start_date: string, title: string){
        this.city = city;
        this.company_name = company_name;
        this.description = description;
        this.end_date = end_date;
        this.start_date = start_date;
        this.title = title;
    }
}