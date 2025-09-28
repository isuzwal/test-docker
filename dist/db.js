import mongoose, { Schema, model } from "mongoose";
const mongoUrl = "mongodb://uzwaldb:27017/uzwal-db";
// this for local-test
// const mongoUrl:string="mongodb://localhost:27017/uzwal-db"
mongoose.connect(mongoUrl)
    .then(() => console.log("Database is connected "))
    .catch((error) => console.log('Error at conenction ', error));
const UserSheam = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
});
export const user = model('User', UserSheam);
//# sourceMappingURL=db.js.map