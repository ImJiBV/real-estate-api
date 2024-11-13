import { Test, TestingModule } from '@nestjs/testing';
import { HouselistingController } from './houselisting.controller';
import { HouselistingService } from './houselisting.service';

describe('HouselistingController', () => {
  let controller: HouselistingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HouselistingController],
      providers: [HouselistingService],
    }).compile();

    controller = module.get<HouselistingController>(HouselistingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
