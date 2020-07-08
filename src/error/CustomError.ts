export default class CustomError {
  constructor(
    public readonly status: number,
    public readonly message: string
  ) {}
}
