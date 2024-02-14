import { Module } from '@nestjs/common';
import { ErrorLogsDataAccessService } from './error.logs.data-access.service';

@Module({
  providers: [ErrorLogsDataAccessService]
})
export class ErrorLogsDataAccessModule {}
