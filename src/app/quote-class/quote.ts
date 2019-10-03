export class Quote {
  showDetails: boolean;
  constructor(public id: number,
      public upvote: number,
      public downvote: number,
      public author: string,
      public uploaded: string,
      public name: string,
      public publishedDate: Date){
    this.showDetails=false;
  }
}