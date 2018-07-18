// Local storage utilities

interface IStoredItem<T> {
  get: () => T;
  set: (value: T) => void;
  destroy: () => void;
}

abstract class StoredItem<T> {
  key: string;

  destroy() {
    localStorage.removeItem(this.key);
  }
}

export abstract class SimpleStoredItem extends StoredItem<string> implements IStoredItem<string> {

  get(): string {
    return localStorage.getItem(this.key);
  }

  set(value: string) {
    localStorage.setItem(this.key, value);
  }
}

export abstract class ObjectStoredItem<T> extends StoredItem<T> implements IStoredItem<T> {

  get(): T {
    return JSON.parse(localStorage.getItem(this.key)) as T;
  }

  set(value: T) {
    localStorage.setItem(this.key, JSON.stringify(value));
  }
}
