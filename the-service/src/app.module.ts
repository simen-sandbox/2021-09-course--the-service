import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RestExampleController } from './rest-example/rest-example.controller';
import { PostsV1Controller } from './posts-v1/posts-v1.controller';
import { PostsV2Controller } from './posts-v2/posts-v2.controller';
import { PostService } from './post/post.service';
import { OMagicController } from './o-magic/o-magic.controller';

@Module({
  imports: [],
  controllers: [AppController, RestExampleController, PostsV1Controller, PostsV2Controller, OMagicController],
  providers: [AppService, PostService],
})
export class AppModule {}
