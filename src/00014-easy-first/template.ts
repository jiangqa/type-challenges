type First<T extends any[]> = T extends [infer R,...infer O] ? R : never
