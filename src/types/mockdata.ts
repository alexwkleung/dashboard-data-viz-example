import type { Status } from './status';

export interface MockData {
  id: number;
  title: string;
  description: string;
  dateCreated: string;
  status: Status;
  comments: string;
}
