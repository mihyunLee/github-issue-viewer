export interface IIssue {
  id: number;
  number: number;
  title: string;
  user: { login: string; avatar_url: string };
  created_at: string;
  comments: number;
  body: string;
}

export type IIssueList = IIssue[];
