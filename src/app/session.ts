import { Speaker } from './speaker';

export class Session {
  title: string;
  language: string;
  level: string;
  room: string;
  format: string;
  speakers: Array<Speaker>;
  keywords: Array<string>;
}
