import { Injectable } from '@nestjs/common';

@Injectable()
export class InMemoryDbService {
  private events: any[] = [];

  addEvent(event: any): void {
    this.events.push(event);
  }

  getAllEvents(): any[] {
    return this.events.slice().reverse();
  }
}
