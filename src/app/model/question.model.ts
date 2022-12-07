export class Question {

  constructor(
    public gender: string,
    public age: string,
    public height: string,
    public weight?: string,
    public targetWeightGoal?: string,
    public baselineActivityLevel?: string,
    public user?: string
  ){}
}
