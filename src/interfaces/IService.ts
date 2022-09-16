export default interface IService<T> {
  create(object: unknown): Promise<T>,
  list(): Promise<T[]>,
  getById(id: string): Promise<T>,
  update(id: string, object: unknown): Promise<T>,
  delete(id: string): Promise<void>
}