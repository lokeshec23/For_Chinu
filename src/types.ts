export interface Memory {
  id: string;
  image: string;
  caption: string;
  date?: string;
}

export interface Milestone {
  id: string;
  title: string;
  description: string;
  date: string;
  icon: string;
}

export interface Reason {
  id: string;
  text: string;
  emoji: string;
}
