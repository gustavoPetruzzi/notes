export interface Note extends NoteFormData {
  senderId: number,
}

export interface FullNote extends Note {
  id: number,
}

export interface NoteFormData {
  title: string,
  content: string,
  receiverId: number
}
