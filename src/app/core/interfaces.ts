export interface IAdapter<T> {
  adapt(data: any): T;
}
