import {StreamChat} from "stream-chat"
import { ENV } from "./env.js"


const apiKey = ENV.STREAM_API_KEY
const apiSecret = ENV.STREAM_API_SECRET

if(!apiKey || !apiSecret){
    console.error("STREAM_API_KEY or STREAM_API_SECRET is missing");
}

// Creates a server-side Stream Chat client.You need this client to:
// create users,update users,generate tokens,create channels,moderate chats (ban, mute, etc.)
export const chatClient = StreamChat.getInstance(apiKey, apiSecret)

//userData from clerk
export const upsertStreamUser = async (userData) => {
    try {
        //Insert or update
        await chatClient.upsertUser(userData)
        console.log("Stream user upserted successfully:", userData);
    } catch (error) {
        console.error("Error upserting stream user:",error)
    }
}

export const deleteStreamUser = async (userId) => {
    try {
        await chatClient.deleteUser(userId)
        console.log("Stream user deleted successfully:", userId)
    } catch (error) {
        console.error("Error deleting stream user:",error)
    }
}

//todo: add another method to generate token