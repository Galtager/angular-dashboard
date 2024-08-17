import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Ticket, TicketStatusEnum } from '../ticket.model';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css'
})
export class TicketComponent {
  @Input({ required: true }) ticket!: Ticket;
  @Output() closeTicket = new EventEmitter();
  expandDetails = true;
  onClose() {
    this.closeTicket.emit(this.ticket.id)
  }
  onToggleExpand() {
    this.expandDetails = !this.expandDetails
  }
}
