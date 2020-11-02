export class Quote {
    showDets: boolean;
    constructor(public id:number,public quote:string,public author:string, public datePosted: Date,public likes:number, public dislikes:number){
        this.showDets=true;
    }
}
