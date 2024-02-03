import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StripeModule } from './stripe/stripe.module';
import { InMemoryDbService } from './in-memory-db/in-memory-db.service';

@Module({
  imports: [StripeModule],
  controllers: [AppController],
  providers: [AppService, InMemoryDbService],
})
export class AppModule {}
