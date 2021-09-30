import { Controller, Get, Post, Req } from '@nestjs/common';
import { Request } from 'express';
import * as rt from 'runtypes';

const helloYouRt = rt.Record({
  hello: rt.String,
});

/**
 * POST /rest-example
 * 
 * {"hello": "<name>"}
 * 
 * 1. Minst mulig bakover-inkompatible endringer. ⚠️
 * 2. Så forståelig som mulig (utover fra sitt perspektiv)
 */

/**
 * Requests /rest-example
 */

@Controller('posts')
export class RestExampleController {

  @Get()
  helloWorld() {
    return 'hello, world';
  }

  @Post()
  helloYou(@Req() req: Request) {
    const body = helloYouRt.check(req.body);
    return `hello, ${body.hello}`;
  }
}
