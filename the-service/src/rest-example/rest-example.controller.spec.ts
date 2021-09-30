import { Test, TestingModule } from '@nestjs/testing';
import { RestExampleController } from './rest-example.controller';

describe('RestExampleController', () => {
  let controller: RestExampleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RestExampleController],
    }).compile();

    controller = module.get<RestExampleController>(RestExampleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
