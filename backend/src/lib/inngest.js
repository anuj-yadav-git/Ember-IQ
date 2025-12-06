import {Inngest} from "inngest";
import { connectDB } from "./db.js";
import User from "../models/User.js";
import { deleteStreamUser, upsertStreamUser } from "./stream.js";

export const inngest = new Inngest({ id: "ember-iq" });

//Saving the user to db and stream after the user.created event
const syncUser = inngest.createFunction(
  { id: "sync-user" },
  { event: "clerk/user.created" },
  async ({ event}) => {
    await connectDB();

    const { id, email_addresses, first_name, last_name, image_url } =
      event.data;
    const newUser = {
      clerkId: id,
      //Get the first(primary) email address if it exists; otherwise give undefined
      email: email_addresses[0]?.email_address,
      name: `${first_name || ""} ${last_name || ""}`,
      profileImage: image_url,
    };

    await User.create(newUser);

    //to do something else
    await upsertStreamUser({
      id: newUser.clerkId.toString(),
      name: newUser.name,
      image: newUser.profileImage,
    });
  }
);


//Deleting the user from db and stream after the user.deleted event
const deleteUserFromDB = inngest.createFunction(
  { id: "delete-user-from-db" },
  { event: "clerk/user.deleted" },
  async ({ event}) => {
    await connectDB()

    const {id} = event.data

    await User.deleteOne({clerkId:id})

    //to do something else
      await deleteStreamUser(id.toString())
  }
);

export const functions = [syncUser, deleteUserFromDB];
