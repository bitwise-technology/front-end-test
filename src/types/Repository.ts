export interface Repository {
  name: string
  lastCommitMessage: string
  lastCommitHash: string
  commitsCount?: number
}
