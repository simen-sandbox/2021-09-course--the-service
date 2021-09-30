import { Collection } from 'fireorm';
import * as v from 'class-validator';
// Database-typen vår

@Collection('posts-v1')
export class PostEntity {
  id: string;

  unionBy: string;
  collectionId: string;
  
  isHiddenFromApi: boolean;
  
  @v.IsString()
  title: string;
}


