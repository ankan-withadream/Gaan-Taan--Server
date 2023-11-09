import 'dotenv/config'

const corsOptions = {
    origin: '*',
    credentials: true,
    //access-control-allow-credentials:true
    optionSuccessStatus: 200,
}

const MEGA_CREDENTIALS = {
    email: process.env.MEGA_USERNAME,
    password: process.env.MEGA_PASSWORD,
}

const MONGOOSE_CONNECTION_STRING = "mongodb+srv://" + process.env.MONGOOSE_CONNECTION_STRING_USERINFO + "@cluster0.yoel9wg.mongodb.net/GaanTaan?retryWrites=true&w=majority";


export {corsOptions, MEGA_CREDENTIALS, MONGOOSE_CONNECTION_STRING}