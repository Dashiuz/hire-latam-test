import { Test, TestingModule } from '@nestjs/testing';
import { PoliciesDataAccessService } from './policies.data-access.service';

describe('PoliciesDataAccessService', () => {
  let service: PoliciesDataAccessService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PoliciesDataAccessService],
    }).compile();

    service = module.get<PoliciesDataAccessService>(PoliciesDataAccessService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
