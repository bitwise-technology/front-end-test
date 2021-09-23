export interface User {
  name: string;
  avatarUrl: string;
  repositories: {
    nodes: Repository[];
    totalCount: number;
  }
}

interface Repository {
  defaultBranchRef: DefaultBranchRef;
  name: "server";
}

interface DefaultBranchRef {
  name: string;
  target: {
    history: {
      nodes: CommitHistory[];
      totalCount: number;
    }
  }
}

interface CommitHistory {
  abbreviatedOid: string;
  message: string;

}