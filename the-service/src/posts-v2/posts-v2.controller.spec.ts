import { Test, TestingModule } from '@nestjs/testing';
import { PostsV2Controller } from './posts-v2.controller';

describe('PostsV2Controller', () => {
  let controller: PostsV2Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PostsV2Controller],
    }).compile();

    controller = module.get<PostsV2Controller>(PostsV2Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
