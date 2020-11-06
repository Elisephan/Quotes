export class Quote {
  public showAuthor: boolean;
  constructor(
    public id: number,
    public name: string,
    public author: string,
    public like: number,
    public unlike: number,
    public completeDate: Date
  ) {
    this.showAuthor = false;
  }
}
