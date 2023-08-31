import { createInterface } from 'readline'
import {
  PrintInterface,
  StarFunctionReturningArrayOfInterface,
  StarFunctionReturningArrayOfString,
  StarFunctionReturningString,
} from './types/star.type'
import { square } from './worksheets'

const inputInterface = createInterface({
  input: process.stdin,
  output: process.stdout,
})

const printer = (
  generator:
    | StarFunctionReturningString
    | StarFunctionReturningArrayOfString
    | StarFunctionReturningArrayOfInterface,
) => (numberOfStars: number) =>
  [...new Array(numberOfStars)]
    .map((lineNumber) => {
      const output = generator(lineNumber)
      if (typeof output === 'string') return output
      if(typeof output[0] === 'string')
        return output.join('')
      return (output as PrintInterface[]).map(({character, amount}) => character.repeat(amount)).join("")
    })
    .join('\n')

inputInterface.question('Number to star', (star) => {
  const starNumber = Number(star)

  console.log(printer(square)(starNumber))
})
