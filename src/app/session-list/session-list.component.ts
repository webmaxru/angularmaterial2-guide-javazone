import { Component, OnInit } from '@angular/core';
import { SessionService } from '../session.service';
import { Session } from '../session';

@Component({
  selector: 'session-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.css']
})
export class SessionListComponent implements OnInit {

  sessions: Array<Session>;

  constructor(private sessionService: SessionService) { }

  getSessions(): void {
    this.sessionService
      .getSessions()
      .then(sessions => this.sessions = sessions);

  }

  ngOnInit(): void {
    this.getSessions();
  }

}
