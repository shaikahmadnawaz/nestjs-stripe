import { Test, TestingModule } from '@nestjs/testing';
import { InMemoryDbService } from './in-memory-db.service';

describe('InMemoryDbService', () => {
  let service: InMemoryDbService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InMemoryDbService],
    }).compile();

    service = module.get<InMemoryDbService>(InMemoryDbService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
