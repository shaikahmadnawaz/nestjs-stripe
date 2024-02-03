import { Module } from '@nestjs/common';
import { StripeController } from './stripe.controller';
import { StripeService } from './stripe.service';
import { InMemoryDbService } from '../in-memory-db/in-memory-db.service';

@Module({
  controllers: [StripeController],
  providers: [StripeService, InMemoryDbService],
})
export class StripeModule {}
