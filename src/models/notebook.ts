import { Note } from './note';

export interface Notebook {
  title: string;
  location: string;
  notes: Note[];
}
