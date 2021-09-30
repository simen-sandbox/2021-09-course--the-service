import { Injectable } from '@nestjs/common';

@Injectable()
export class PostService {
  list() {}
  listById() {}
  get() {}
  delete() {}

  fromApi(from) {
    return {
      // ...to
    };
  }

  toApi(to) {
    return {
      // ...from
    };
  }
}
