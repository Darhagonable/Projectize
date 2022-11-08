type ValuesOf<T> = Array<T[keyof T]>;

declare global {
  interface ObjectConstructor {
    partial<T, K extends keyof T>(obj: T, keys: Array<K>): Pick<T, K>
    specificValues<T, K extends keyof T>(obj: T, keys: Array<K>): ValuesOf<Pick<T, K>>
  }
}

Object.partial = function<T, K extends keyof T>(obj: T, keys: Array<K>)  {
  return Object.fromEntries(keys.map((key) => [key, obj[key]])) as Pick<T, K>;
};

Object.specificValues = function<T, K extends keyof T>(obj: T, keys: Array<K>) {
  return Object.values(Object.partial(obj, keys));
};

export {};