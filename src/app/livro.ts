import { Autor } from "./autor";

export interface Livro {
  id: number,
  titulo: string,
  anoLancamento: number,
  autoresIds: Autor[]
}
