import { Test, TestingModule } from '@nestjs/testing';
import { UsersDataAccessService } from './users.data-access.service';

describe('UsersDataAccessService', () => {
  let service: UsersDataAccessService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersDataAccessService],
    }).compile();

    service = module.get<UsersDataAccessService>(UsersDataAccessService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
