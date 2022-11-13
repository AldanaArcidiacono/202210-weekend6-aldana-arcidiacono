export interface RepositoryD<T> {
    getAllDessert: () => Promise<Array<T>>;
    getDessert?: (id: number) => Promise<T>;
    createDessert: (item: Partial<T>) => Promise<T>;
    updateDessert: (item: Partial<T>) => Promise<T>;
    deleteDessert: (id: number) => Promise<void>;
}
