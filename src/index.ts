import { createInterface } from 'readline'
import {
  PrintInterface,
  StarFunctionReturningArrayOfInterface,
  StarFunctionReturningArrayOfString,
  StarFunctionReturningString,
} from './types/star.type'
import { squareReturnString } from './worksheets/square'

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
    .map((_, lineNumber) => {
      const output = generator(numberOfStars, lineNumber)
      if (typeof output === 'string') return output
      if (typeof output[0] === 'string') return output.join('')
      return (output as PrintInterface[])
        .map(({ character, amount }) => character.repeat(amount))
        .join('')
    })
    .join('\n')

inputInterface.question('Number to star: ', (star) => {
  const starNumber = Number(star)

  console.log(printer(squareReturnString)(starNumber))
  process.exit(0)
})
