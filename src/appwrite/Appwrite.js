/* eslint-disable no-useless-catch */
import { Account, Client, ID } from "appwrite";
export class Auth{
    client = new Client();
    account;

    constructor(){
        this.client
        .setEndpoint("https://cloud.appwrite.io/v1")
        .setProject("65fe9062446c2859e2ba")

        this.account = new Account(this.client)
    }

    async Signup({ email, password, name }){
        try {
            const user = await this.account.create(ID.unique(), email, password, name);
            if (user) {
                return user
                
            } else {
                return null
            }
        } catch (error) {
            throw error
        }

    }

    async login({ email, password }){
        try {
            return await this.account.createEmailSession(email,password)
        } catch (error) {
            throw error
        }

    }

    async logout(){
        try {
            return await this.account.deleteSession()
        } catch (error) {
            console.log("Appwrite service :: logout :: error", error);
        }
    }
}

const AppwriteService = new Auth();
export default AppwriteService;

