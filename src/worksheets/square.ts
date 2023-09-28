import {
  StarFunctionReturningArrayOfInterface,
  StarFunctionReturningArrayOfString,
  StarFunctionReturningString,
} from '../types/star.type'

export const squareReturnString: StarFunctionReturningString = (totalLine) => {
  return [...new Array(totalLine)].map(() => '*').join('')
}

export const squareReturnArrayOfString: StarFunctionReturningArrayOfString = (
  totalLine,
) => {
  return [...new Array(totalLine)].map(() => '*')
}

export const squareReturnArrayOfInterface: StarFunctionReturningArrayOfInterface = (
  totalLine,
) => {
  return [
    {
      character: '*',
      amount: totalLine,
    },
  ]
}
