export const appwriteConfig = {
  endpointurl: process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!,
  projectId: process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID!,
  databaseId: process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID!,
  usersCollectionId: process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_USERS_ID!,
  filesCollectionId: process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_FILES_ID!,
  fileStorageBucketId: process.env.NEXT_PUBLIC_APPWRITE_FILE_STORAGE_BUCKET_ID!,
};
