import { Body, Controller, Post } from '@nestjs/common';
import { StripeService } from './stripe.service';

@Controller('stripe')
export class StripeController {
  constructor(private stripeService: StripeService) {}

  @Post()
  checkout(@Body() body: { amount: number; currency: string }) {
    try {
      return this.stripeService.createPaymentIntent(body.amount, body.currency);
    } catch (error) {
      return error;
    }
  }
}
