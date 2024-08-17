import { CommonModule } from '@angular/common';
import { AfterContentInit, AfterViewInit, Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from "../../../shared/control/control.component";

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [CommonModule, FormsModule, ButtonComponent, ControlComponent],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent {
  @ViewChild("form") form?: ElementRef<HTMLFormElement>
  @Output() addTicket = new EventEmitter<{ title: string, request: string }>();

  request: string = "";
  title: string = "";

  onSubmit(title: string, request: string) {
    this.addTicket.emit({ title, request })
    this.form?.nativeElement.reset();
  }
}
