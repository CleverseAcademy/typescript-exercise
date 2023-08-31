import { StarFunction } from "../types/star.type"

export const square: StarFunction = (lineNumber) => {
return [...new Array(lineNumber)].map(() => "*").join("")
}
