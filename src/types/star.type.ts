export interface PrintInterface {
  character: "+" | " "
  amount: number
}

export type StarFunctionReturningString = (lineNumber: number) => string
export type StarFunctionReturningArrayOfString = (lineNumber: number) => string[]
export type StarFunctionReturningArrayOfInterface = (lineNumber: number) => PrintInterface[]