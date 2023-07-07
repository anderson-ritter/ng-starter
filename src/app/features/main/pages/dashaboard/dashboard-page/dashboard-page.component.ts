import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { Message } from './../../../../../shared/models/messages';
import { SharedModule } from './../../../../../shared/shared.module';
import { MessagesFacade } from './../../../../../store/messages';

@Component({
  standalone: true,
  imports: [SharedModule],
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent {

  private readonly messagesFacade: MessagesFacade = inject(MessagesFacade);
  private readonly fb: FormBuilder = inject(FormBuilder);

  readonly messages$ = this.messagesFacade.messages$;

  emailDisabled = false;

  form = this.fb.group({
    email: [null, [Validators.required, Validators.email]]
  });

  addMessage(): void {
    const message: Message = { id: '1', title: 'Test', content: 'Test message', publishDate: new Date(), readed: false };
    this.messagesFacade.addMessage(message);
  }

  deleteMessage(id: string): void {
    this.messagesFacade.deleteOne(id);
  }

  ngOnInit(): void {
    this.addMessage();
  }

  toggleDisableEmail() {
    if (this.form.get('email')?.disabled)
      this.form.get('email')?.enable();
    else
      this.form.get('email')?.disable();
  }

  readMessage(id: string) {
    this.messagesFacade.readMessage(id);
  }
}
