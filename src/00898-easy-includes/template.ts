import {Equal} from "@type-challenges/utils";

export type Includes<T extends readonly unknown[], U> =
  T extends [infer Fist,...infer REST]?Equal<U,Fist> extends true ? true : Includes<REST,U>:false
