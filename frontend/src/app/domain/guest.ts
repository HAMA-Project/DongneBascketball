export interface GuestPost {
  id: number;
  title: string;
  region: string;
  // TO DO : time type string -> Date
  match_date: string;
  start_time: string;
  end_time: string;
  status: boolean;
  content: string;
  created_date: string;
  updated_date: string;
  writer: string;
}

// TO DO : GuestPostUpdate
