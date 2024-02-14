import { Test, TestingModule } from '@nestjs/testing';
import { ErrorLogsDataAccessService } from './error.logs.data-access.service';

describe('ErrorLogsDataAccessService', () => {
  let service: ErrorLogsDataAccessService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ErrorLogsDataAccessService],
    }).compile();

    service = module.get<ErrorLogsDataAccessService>(ErrorLogsDataAccessService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
