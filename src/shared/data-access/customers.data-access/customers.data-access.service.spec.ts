import { Test, TestingModule } from '@nestjs/testing';
import { CustomersDataAccessService } from './customers.data-access.service';

describe('CustomersDataAccessService', () => {
  let service: CustomersDataAccessService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CustomersDataAccessService],
    }).compile();

    service = module.get<CustomersDataAccessService>(CustomersDataAccessService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
