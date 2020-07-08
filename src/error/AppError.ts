export default class AppError {
  constructor(
    public readonly status: number,
    public readonly message: string
  ) {}
}
