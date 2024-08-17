import { Component, effect, signal } from '@angular/core';
import { NewTicketComponent } from "./new-ticket/new-ticket.component";
import { Ticket, TicketStatusEnum } from './ticket.model';
import { TicketComponent } from "./ticket/ticket.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [NewTicketComponent, TicketComponent, CommonModule],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.css'
})
export class TicketsComponent {

  tickets = signal<Ticket[]>([]);


  onAddTicket({ title, request }: { title: string; request: string; }) {
    const newTicket: Ticket = {
      title,
      request,
      id: this.tickets().length.toString(),
      status: TicketStatusEnum.OPEN
    }
    this.tickets.set([...this.tickets(), newTicket])
  }
  onCloseTicket(id: string) {
    this.tickets.update(curr => curr.map(ticket => {
      if (ticket.id === id) {
        return { ...ticket, status: TicketStatusEnum.CLOSE }
      }
      return ticket
    }))
  }

}
