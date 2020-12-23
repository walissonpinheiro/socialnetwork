export interface Todo {
  id: number;
  content: string;
}

export interface Coments {
  id: number;
  user: string;
  coment: string;
}

export interface Posts {
  image: string;
  description: string;
  coments: Array<Coments>;
}
