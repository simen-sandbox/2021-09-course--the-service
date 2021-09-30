import { Test, TestingModule } from '@nestjs/testing';
import { PostsV1Controller } from './posts-v1.controller';

describe('PostsV1Controller', () => {
  let controller: PostsV1Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PostsV1Controller],
    }).compile();

    controller = module.get<PostsV1Controller>(PostsV1Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
