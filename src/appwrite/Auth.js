/* eslint-disable no-unreachable */
/* eslint-disable no-useless-catch */
import { Account,Client,ID } from "appwrite";

import Config from "../config/Config";

export class AppwriteService {
    Client = new Client();
    account;

    constructor(){
        this.Client
        .setEndpoint(Config.appwriteURL)
        .setProject(Config.appwriteProjectID);

        this.account = new Account(this.Client);
    }
    async createAccount({ Email, Password, Name }) {
        try {
            const userAccount = await this.account.create(ID.unique(), Email, Password, Name)
            if (userAccount) {
                return this.login
            } else {
                return userAccount
            }
        } catch (error) {
            throw error;
        }

    }

    async login({ Email, Password }) {
        try {
            return await this.account.createEmailSession(Email, Password);
        } catch (error) {
            throw error;
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get()

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
