export class Quote {
    showDets: boolean;
  completeDate: string | number | Date;
    constructor(public id:number,public name:string,public quote:string,public author:string, public datePosted: Date,public likes:number, public dislikes:number){
        this.showDets=true;
    }
}
