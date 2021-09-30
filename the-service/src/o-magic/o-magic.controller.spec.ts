import { Test, TestingModule } from '@nestjs/testing';
import { OMagicController } from './o-magic.controller';

describe('OMagicController', () => {
  let controller: OMagicController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OMagicController],
    }).compile();

    controller = module.get<OMagicController>(OMagicController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
