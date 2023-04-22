
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
  my_list: MyComics[]
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
  published: string;
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
  creator: User;
  created_time: Date;
  comments: Comment[];
}
