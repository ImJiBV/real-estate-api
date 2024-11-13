import { Test, TestingModule } from '@nestjs/testing';
import { HouselistingService } from './houselisting.service';

describe('HouselistingService', () => {
  let service: HouselistingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HouselistingService],
    }).compile();

    service = module.get<HouselistingService>(HouselistingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
