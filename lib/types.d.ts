export type Entries<T> = { [K in keyof T]: [K, T[K]] }[keyof T];
export type UnionToIntersection<U> = (
  U extends any ? (k: U) => void : never
) extends (k: infer I) => void
  ? I
  : never;
export type IsUnion<T> = [T] extends [UnionToIntersection<T>] ? false : true;
export type Mapped<Type extends string | number | symbol, Return> = IsUnion<Type> extends true
  ? { [x in Type]: Return }
  : { [x in keyof Type]: Return };
export type Tuple<TItem, TLength extends number> = (TItem extends unknown[]
  ? [...TItem]
  : [TItem, ...TItem[]]) & {
  length: TLength;
};
