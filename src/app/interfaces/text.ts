interface TextI {
  text: string
}

interface BadWordsI {
  name: string,
  value: number
}
interface JwtText {
  body: {
    badWords: BadWordsI[],
    listWords: string[],
  }
}

export {
  JwtText,
  TextI
}