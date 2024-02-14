import { Test, TestingModule } from '@nestjs/testing';
import { ClaimsDataAccessService } from './claims.data-access.service';

describe('ClaimsDataAccessService', () => {
  let service: ClaimsDataAccessService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ClaimsDataAccessService],
    }).compile();

    service = module.get<ClaimsDataAccessService>(ClaimsDataAccessService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
