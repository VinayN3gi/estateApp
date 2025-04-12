import {Client,Account,ID} from "appwrite"

const client=new Client();
client.setEndpoint(process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT!).setProject(process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID!)

const account=new Account(client);

export const signUp=async(email:string,password:string)=>
{
   try {
        await account.create(ID.unique(),email,password);
        await account.createEmailPasswordSession(email,password);
        return true; 
   } 
   catch (error) {
    console.log("Sign Up error",error);
    throw error;

   }
}