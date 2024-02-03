import { Body, Controller, Get, Post } from '@nestjs/common';
import { StripeService } from './stripe.service';
import { InMemoryDbService } from 'src/in-memory-db/in-memory-db.service';

@Controller('stripe')
export class StripeController {
  constructor(
    private readonly stripeService: StripeService,
    private readonly inMemoryDbService: InMemoryDbService,
  ) {}

  @Post()
  checkout(@Body() body: { amount: number; currency: string }) {
    try {
      return this.stripeService.createPaymentIntent(body.amount, body.currency);
    } catch (error) {
      return error;
    }
  }

  @Get('events')
  getAllEvents() {
    return this.inMemoryDbService.getAllEvents();
  }
}
