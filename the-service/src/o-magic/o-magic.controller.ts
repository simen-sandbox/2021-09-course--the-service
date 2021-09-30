import { Controller, Get, Post, Req } from '@nestjs/common';
import * as rt from 'runtypes';
import { magicApi } from 'magic-api';

const createMagicRt = rt.Record({
  creatted_at: rt.String,
  whooswho: rt.String,
});


@Controller('v1/o-magic')
export class OMagicController {
  @Post()
  getTheMagic(@Req() req: Request) {
    const data = createMagicRt.check(req.body);
    const m = new magicApi();
    m.sendRequest(data);
  }
}
