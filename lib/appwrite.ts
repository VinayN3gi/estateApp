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

export const signIn=async (email:string,password:string)=>{
   try {
      const session=await account.createEmailPasswordSession(email,password);
      return session;
   } catch (error) {
      console.error("Log In error",error);
      throw error;
   }
}

export const getUser=async()=>{
   try {
      const user=await account.get();
      return {success:true,user};
   } catch (error) {
      return {success:false,messgae:"Failed to fecth user"}
   }
}

export const logOut=async()=>{
   try {
      await account.deleteSession("current");
      return true;
   } catch (error) {
      console.error("Log Out error",error);
      return false;
   }
}

