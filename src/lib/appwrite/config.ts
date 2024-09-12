import { Client, Account, Databases, Storage, Avatars } from "appwrite";

function checkEnvVariable(name: string, value: string) {
  if (!value) {
    throw new Error(`Environment variable ${name} is missing or undefined.`);
  }
  return value;
}

export const appwriteConfig = {
  url: checkEnvVariable("VITE_APPWRITE_URL", import.meta.env.VITE_APPWRITE_URL),
  projectId: checkEnvVariable(
    "VITE_APPWRITE_PROJECT_ID",
    import.meta.env.VITE_APPWRITE_PROJECT_ID
  ),
  databaseId: checkEnvVariable(
    "VITE_APPWRITE_DATABASE_ID",
    import.meta.env.VITE_APPWRITE_DATABASE_ID
  ),
  storageId: checkEnvVariable(
    "VITE_APPWRITE_STORAGE_ID",
    import.meta.env.VITE_APPWRITE_STORAGE_ID
  ),
  userCollectionId: checkEnvVariable(
    "VITE_APPWRITE_USER_COLLECTION_ID",
    import.meta.env.VITE_APPWRITE_USER_COLLECTION_ID
  ),
  postCollectionId: checkEnvVariable(
    "VITE_APPWRITE_POST_COLLECTION_ID",
    import.meta.env.VITE_APPWRITE_POST_COLLECTION_ID
  ),
  savesCollectionId: checkEnvVariable(
    "VITE_APPWRITE_SAVES_COLLECTION_ID",
    import.meta.env.VITE_APPWRITE_SAVES_COLLECTION_ID
  ),
};
export const client = new Client();

client.setEndpoint(appwriteConfig.url);
client.setProject(appwriteConfig.projectId);

export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);
export const avatars = new Avatars(client);
