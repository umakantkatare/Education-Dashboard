/* eslint-disable no-unreachable */
/* eslint-disable no-useless-catch */
import { Account,Client,Databases,ID,  } from "appwrite";

import Config from "../config/Config.js";

export class AppwriteService {
    Client = new Client();
    account;
    database;
    

    constructor(){
        this.Client
        .setEndpoint("https://cloud.appwrite.io/v1")
        .setProject("65fe9062446c2859e2ba")
        // .setEndpoint(Config .appwriteURL)
        // .setProject(Config.appwriteProjectID);
        

        this.account = new Account(this.Client);
        this.database = new Databases(this.Client)
    }
    async createAccount({ email, password, name }) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name)
            if (userAccount) {
                return this.login
            } else {
                return userAccount
            }
            // return userAccount
        } catch (error) {
            throw error;
        }

    }

    async login({ email, password }) {
        try {
           return await this.account.createEmailSession(email, password);
        } catch (error) {
            throw error;
        }
    }

    async getCurrentUser() {
        try {
            const getUser = await this.account.get()
            if (getUser) {
                console.log(getUser)
                return getUser
            } else {
               return null 
            }

        } catch (error) {
            throw error
        }
        return null;
    }

    async logout() {
        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite service :: logout :: error", error);
        }
    }
}


const authService = new AppwriteService();

export default authService
