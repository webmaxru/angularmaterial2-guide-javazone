import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Session } from './session';

@Injectable()
export class SessionService {

  private headers = new Headers({ 'Content-Type': 'application/json' });
  private sessionsUrl = 'assets/sessions.json';

  constructor(private http: Http) { }

  getSessions(): Promise<Session[]> {
    return this.http.get(this.sessionsUrl)
      .toPromise()
      .then(response => response.json() as Session[])
  }

}
