export interface I18nResolver<TRequest = any> {
  resolve(req: TRequest): string | string[] | undefined;
}
