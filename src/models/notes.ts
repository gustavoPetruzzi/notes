export interface Note {
  id: number,
  title: string,
  content: string,
  receiver: number,
  sender: number,
}

export interface FullNote extends Note {
  id: number,
}