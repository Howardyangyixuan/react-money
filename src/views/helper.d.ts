type Tag = {
  id: number,
  name: string
}

type Category = '+' | '-'

type RecordItem = {
  tagsName: string[],
  note: string,
  category: Category
  output: number,
  createdAt: string
}

export {Tag,Category,RecordItem}