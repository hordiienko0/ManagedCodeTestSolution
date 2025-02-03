import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private message = "Hi from Root Component";

  getMessage(): string {
    return this.message;
  }

  setNewMessage(newMessage: string): void {
    this.message = newMessage;
  }

  resetMessage(): void {
    this.message = "Hi from Root Component";
  }
}