import { Controller, Get, Post, Req } from '@nestjs/common';
import { Timestamp } from 'google-protobuf/google/protobuf/timestamp_pb';
import { Request } from 'express';
import * as rt from 'runtypes';
import { PostEntity } from 'src/post/post';

const postRt = rt.Record({
  title: rt.String,
  content: rt.String,
  creatted_at: rt.String,
  whooswho: rt.String,
});

/**
 * POST /posts
 *
 * {"title": "<name>", "content": "hei!"}
 *
 * 1. Minst mulig bakover-inkompatible endringer. ⚠️
 * 2. Så forståelig som mulig (utover fra sitt perspektiv)
 */

/**
 * Requests /v1/posts
 *
 * Her finner du blogg-/nyhetsartikler.
 */

@Controller('v1/posts')
export class PostsV1Controller {
  @Get()
  listAllPosts() {
    return ['hello, world'];
  }

  @Post()
  addPost(@Req() req: Request) {
    const body = postRt.check(req.body);
    const databaseEntity: PostEntity = {
      id: 1,
      unionBy: 'mom',
      collectionId: 'v21313',
      isHiddenFromApi: false,
      title: body.title,
    };

    return {
      title: body.title,
      creatted_at: new Timestamp().fromDate(new Date()),
    };
  }
}
