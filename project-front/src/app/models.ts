
export interface MyComics{
  id: number;
  comics: Comics;
  progress: string;
}

export interface User{
  id: number;
  user_name: string;
  email: string;
  password: string;
  my_list: MyComics[];
  is_logged: boolean;
}

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
  published: Date;
  type_name: string;
}

export interface Tyep{
  id: number;
  name: string;
  comics: Comics[]
}

export interface Commentary{
  id: number;
  user?: User;
  body: string;
  post_time: Date;
}


export interface Discussion{
  id: number;
  title: string;
  user: User;
  creator: string;
  created_time: Date;
  comments: Comment[];
}

export interface Gallery{
  id: number;
  pic: string;
  newsId: number;
}

export interface News{
  id: number;
  title: string;
  body: string;
  post_date: Date
}

export interface AuthToken {
  token: string;
}
