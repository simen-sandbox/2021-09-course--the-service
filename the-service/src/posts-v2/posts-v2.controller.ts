import { Controller, Get, Post, Req } from '@nestjs/common';
import { Request } from 'express';
import * as rt from 'runtypes';

const postRt = rt.Record({
  title: rt.String,
  content: rt.String,
  createdAt: rt.String,
  creattedBy: rt.String,
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
 * Requests /v2/posts
 *
 * Her finner du blogg-/nyhetsartikler.
 */

@Controller('v2/posts')
export class PostsV2Controller {
  @Get()
  listAllPosts() {
    return ['hello, world'];
  }

  @Post()
  addPost(@Req() req: Request) {
    const body = postRt.check(req.body);
    return `title: ${body.title}`;
  }
}
