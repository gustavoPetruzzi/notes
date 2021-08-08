export interface Note extends NoteFormData {
  sender: number,
}

export interface FullNote extends Note {
  id: number,
}

export interface NoteFormData {
  title: string,
  content: string,
  receiver: number
}