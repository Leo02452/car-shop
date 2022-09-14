export interface IModel<T> {
  create(object: T): Promise<T>,
  read(): Promise<T[]>,
  readOne(id: string): Promise<T | null>,
  update(id: string, object: T): Promise<T | null>,
  delete(id: string): Promise<T | null>
}