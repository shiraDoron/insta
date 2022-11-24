import mongoose from "mongoose";

async function connect() {
    const dbUri = "mongodb://localhost:27017/Insta"

    try {
        await mongoose.connect(dbUri);
        console.log('db connect');

    } catch (error) {
        console.error('could not connect to db')
        process.exit(1)
    }
}

export default connect;