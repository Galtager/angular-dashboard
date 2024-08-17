import { Component, DestroyRef, effect, inject, Input, OnDestroy, OnInit, signal } from '@angular/core';

export enum serverStatusEnum {
  ONLINE = "online",
  OFFLINE = "offline",
  UNKNOWN = "unknown"
}
@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css'
})
export class ServerStatusComponent implements OnInit {

  currentStatus = signal<serverStatusEnum>(serverStatusEnum.ONLINE);
  private destroyRef = inject(DestroyRef)

  ngOnInit() {
    const interval = setInterval(this.toggleServerStatus.bind(this), 5000)

    this.destroyRef.onDestroy(() => clearInterval(interval))
  }
  toggleServerStatus() {
    const rnd = Math.random();
    if (rnd < 0.5) {
      this.currentStatus.set(serverStatusEnum.ONLINE)
    } else if (rnd < 0.9) {
      this.currentStatus.set(serverStatusEnum.OFFLINE)
    } else {
      this.currentStatus.set(serverStatusEnum.UNKNOWN)

    }
  }
}
