import {Client,Account,ID, Databases, Query} from "appwrite"
import { Property } from "./propertyInterface";


export const config={
   platform:'com.test.estateApp',
   endpoint:process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT,
   projectId:process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID,
   databaseId:process.env.EXPO_PUBLIC_APPWRITE_DATABASE_ID,
   galleriesCollectionId:process.env.EXPO_PUBLIC_APPWRITE_GALLERIES_COLLECTION_ID,
   propertiesCollectionId:process.env.EXPO_PUBLIC_APPWRITE_PROPERTIES_COLLECTION_ID
}

export const client=new Client();
client.setEndpoint(config.endpoint!).setProject(config.projectId!)

export const account=new Account(client);
export const databases=new Databases(client);

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
      //console.error("Log In error",error);
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


export async function getLatestProperties()
{
   try {
      const result=await databases.listDocuments(
         config.databaseId!,
         config.propertiesCollectionId!,
         [Query.orderAsc('$createdAt'),Query.limit(5)]
      )   

      return result.documents as Property[];
   } 
   catch (error) {
      console.error(error);
      return []
   }
}

export async function getProperties({filter ,query,limit}:{filter:string;query:string,limit?:number})
{
   try {
      const buildQuery=[Query.orderDesc('$createdAt')];
      

      if(filter && filter!='All')
      {
         buildQuery.push(Query.equal('type',filter));

      }
      if(query)
      {
         buildQuery.push(Query.or([
            Query.search('name', query),
            Query.search('address',query),
            Query.search('type',query)
         ]))
      }

      if(limit)
      {
         buildQuery.push(Query.limit(limit));
      }


      const result=await databases.listDocuments(
         config.databaseId!,
         config.propertiesCollectionId!,
         buildQuery
      )   
      return result.documents as Property[];
   } 
   catch (error) {
      console.error(error);
      return []
   }  
}
