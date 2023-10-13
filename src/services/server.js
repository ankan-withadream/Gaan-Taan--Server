import mongoose from "mongoose";
import * as mega from "megajs";
import { MONGOOSE_CONNECTION_STRING } from "../settings.js";


var mega_storage = {};

export default function Connect_server() {
    Connect_DB();
    ConnectMega();
}

function Connect_DB() {
    mongoose.connect(MONGOOSE_CONNECTION_STRING)
        .then((status) => {
            console.log("successfully connected database:");
        })
        .catch((error) => {
            console.log("Error while database connection:", error);
        })
}

async function ConnectMega() {
    mega_storage = new mega.Storage({ email: "cocgreenranger@gmail.com", password: "Iamankan777", });
}


// exports.mega_storage_instance = mega_storage;
// exports.Connect_server = Connect_server;
export {mega_storage, Connect_server}