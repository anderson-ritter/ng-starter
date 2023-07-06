import { Component, inject } from '@angular/core';

import { SharedModule } from './../../../../../shared/shared.module';
import { Message, MessagesFacade } from './../../../../../store/messages';

@Component({
  standalone: true,
  imports: [SharedModule],
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent {

  private readonly messagesFacade: MessagesFacade = inject(MessagesFacade);

  readonly messages$ = this.messagesFacade.messages$;

  addMessage(): void {
    const message: Message = { id: '1', title: 'Test', content: 'Test message', publishDate: new Date() };
    this.messagesFacade.addMessage(message);
  }

  deleteMessage(id: string): void {
    this.messagesFacade.deleteOne(id);
  }

  ngOnInit(): void {
    this.addMessage();
  }
}
