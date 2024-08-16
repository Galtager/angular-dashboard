import { Component, DestroyRef, inject, Input, OnDestroy, OnInit } from '@angular/core';

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

  currentStatus: serverStatusEnum = serverStatusEnum.ONLINE;
  private destroyRef = inject(DestroyRef)

  ngOnInit() {
    const interval = setInterval(this.toggleServerStatus.bind(this), 5000)

    this.destroyRef.onDestroy(() => clearInterval(interval))
  }
  toggleServerStatus() {
    const rnd = Math.random();
    if (rnd < 0.5) {
      this.currentStatus = serverStatusEnum.ONLINE
    } else if (rnd < 0.9) {
      this.currentStatus = serverStatusEnum.OFFLINE
    } else {
      this.currentStatus = serverStatusEnum.UNKNOWN
    }
  }
}
