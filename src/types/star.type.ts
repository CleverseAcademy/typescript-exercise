export interface PrintInterface {
  character: "*" | " "
  amount: number
}

export type StarFunctionReturningString = (totalLine: number, currentLineNumber: number) => string
export type StarFunctionReturningArrayOfString = (totalLine: number, currentLineNumber: number) => string[]
export type StarFunctionReturningArrayOfInterface = (totalLine: number, currentLineNumber: number) => PrintInterface[]