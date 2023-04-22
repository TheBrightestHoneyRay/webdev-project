
export interface Comics{
  id: number;
  name: string;
  pic: string;
  author: string;
  genre: string[];
  description: string;
  duration: string;
  status: string;
  rating: number;
  published: string;
  type_name: string;
}

export interface Tyep{
  id: number;
  name: string;
  comics: Comics[]
}
