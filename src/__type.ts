const sth = (text:string) => text.split(",")

interface Chair {
  a: string;
  b: string;
}

interface Table {
  c: string;
  d: string;
}

type X = number & string

// const x: X = 2

// enum Brand {
//   IKEA,
//   ERGOTREND
// }

// interface Chair {
//   color: string
//   brand: Brand
//   usable: boolean
// }

// const x: number = 1

// const y: string = "ABCD"

// const b: boolean = true

// const z: Chair = {
//   color: "black",
//   brand: Brand.ERGOTREND,
//   usable: false
// }


// const toString1 = (x: number): string => x.toString()

// const toString2 = (x: number): string => String(x)

// const toString3 = (x: number): string => `${x}`


// const checkType = (x: string | number): string => {
//   if (typeof x === "string")
//   return `${x * 1} is string`

// return `${x * 2} is number`
// }

// console.log(checkType("sfdf"))

// console.log(checkType(2))

const sth1 = (aNumber: number) => {
  const x: number[] = []
  for (let index = 0; index < aNumber; index++) {
    x.push(index)
  }
  return x
}






// console.log(checkType(false))



// const stringConcat = (str1: string, str2: string) => str1 + str2

// console.log(stringConcat(String(x), y))
