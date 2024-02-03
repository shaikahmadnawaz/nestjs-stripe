import { Injectable } from '@nestjs/common';
import Stripe from 'stripe';
import { InMemoryDbService } from '../in-memory-db/in-memory-db.service';

@Injectable()
export class StripeService {
  private stripe: Stripe;

  constructor(private readonly inMemoryDbService: InMemoryDbService) {
    this.stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
      apiVersion: '2023-10-16',
    });
  }

  async createPaymentIntent(amount: number, currency: string) {
    const paymentIntent = await this.stripe.paymentIntents.create({
      amount: amount * 100,
      currency,
    });

    this.inMemoryDbService.addEvent({
      type: 'payment',
      amount: paymentIntent.amount,
      currency: paymentIntent.currency,
      paymentIntentId: paymentIntent.id,
    });

    return paymentIntent;
  }
}
