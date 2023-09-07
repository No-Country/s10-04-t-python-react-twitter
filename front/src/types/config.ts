export interface Root {
    id: number
    email: string
    firs_name: string
    last_name: string
    avatar: string
    front_page: string
    birthdate: unknown
    bio: string
    location: string
    website: string
    followers_count: number
    following_count: number
    tweets: Tweet[]
  }
  
  export interface Tweet {
    id: number
    contenido: string
    multimedia: string
    gif: string
    liked_count: number
    comentario_count: number
    retweet: number
  }