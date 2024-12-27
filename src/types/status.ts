export type Status = 'Open' | 'Closed' | 'In Progress';

export type TotalStatus = {
  Open: number;
  Closed: number;
  'In Progress': number;
};
