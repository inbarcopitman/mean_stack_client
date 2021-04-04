export class Users {
  constructor (
    public _id : string,
    public Name : string,
    public Email : string,
    public Street : string,
    public City : string,
    public Zipcode : number,
    public Tasks : any[],
    public Posts : any[]
  )
  {

  }
}
