export class User {

  constructor(
    public username: string,
    public email: string,
    public password: string,
    public firstName?: string,
    public lastName?: string,
    public address?: string,
    public city?: string,
    public postalCode?: string,
    public question1?: string,
    public answer1?: string,
    public question2?: string,
    public answer2?: string
  ){}
}
