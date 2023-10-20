const corsOptions = {
    origin: '*',
    credentials: true,
    //access-control-allow-credentials:true
    optionSuccessStatus: 200,
}

const MEGA_CREDENTIALS = {
    email: "cocgreenranger@gmail.com",
    password: "Iamankan777",
}

const MONGOOSE_CONNECTION_STRING = "mongodb+srv://cocgreenranger:admin@cluster0.yoel9wg.mongodb.net/GaanTaan?retryWrites=true&w=majority";


export {corsOptions, MEGA_CREDENTIALS, MONGOOSE_CONNECTION_STRING}