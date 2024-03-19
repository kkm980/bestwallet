import { gql } from "@apollo/client";

export const LOAD_USERS = gql`
  query Leaderboard(
    $activityTrackerId: Int!
    $page: Int
    $pageSize: Int
    $loggedInWalletAddress: String
  ) {
    leaderboard(
      activityTrackerId: $activityTrackerId
      page: $page
      pageSize: $pageSize
      loggedInWalletAddress: $loggedInWalletAddress
    ) {
      activityTrackerId
      participants {
        walletAddress
        twitterId
        discordId
        email
        twitterUsername
        discordUsername
        points
        rank
      }
    }
  }
`;

export const VERIFY_FORM_SUBMISSION_BY_IDENTIFIER = gql`
  query VerifyFormSubmissionByIdentifier(
    $formUniqueId: String!
    $identityType: String!
    $identityId: String!
  ) {
    verifyFormSubmissionByIdentifier(
      formUniqueId: $formUniqueId
      identityType: $identityType
      identityId: $identityId
    )
  }
`;

export const DAILY_QUEST_TASKS = gql`
  query Tasks(
    $activityTrackerId: Int!
    $active: Boolean
    $walletAddress: String
  ) {
    tasks(
      activityTrackerId: $activityTrackerId
      active: $active
      walletAddress: $walletAddress
    ) {
      activityTrackerId
      tasks {
        taskId
        groupType
        name
        subText
        taskPoints
        startDate
        expiryDate
        completed
        userPoints
      }
    }
  }
`;
