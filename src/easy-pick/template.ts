type MyPick<T, K extends keyof T> = {
  [P in K] : T[P];
}
// type o = Pick<{num:number},'num'>
