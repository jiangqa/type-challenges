// type MyOmit<T, K extends keyof T> = {
//   [P in keyof T extends K ? never : keyof T]: T[P]
// }
type MyOmit<T, K extends keyof T> = MyPick<T, MyExclude<keyof T, K>>

// type MyPick1<T,K extends keyof T> = {
//   [P in K]:T[P]
// }
// type MyExclude1<T,K> = K extends T?never:T
//

// type t = two extends one?true:false
// type MyOmit<T, K extends keyof T> = {
//   [P in keyof T as P extends K ?never:P]:T[P]
// }
