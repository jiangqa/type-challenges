type Replace<S extends string, From extends string, To extends string> =
  From extends ''? S: S extends `${infer R}${From}${infer O}`?`${R}${To}${O}`:S
