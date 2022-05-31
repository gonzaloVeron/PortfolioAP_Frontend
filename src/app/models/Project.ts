export class Project{
    description: string;
    id: number;
    title: string;
    url: string;

    constructor(description: string, id: number, title: string, url: string){
        this.description = description;
        this.id = id;
        this.title = title;
        this.url = url;
    }
}