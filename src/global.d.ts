declare type Nullable<T> = T | null;
declare type Arrayable<T> = T | T[];
declare type Recordable<T = any> = Record<string, T>