type Pop<T extends any[]> = T extends [...infer P, any]?P:never
