import { Schema, model} from "mongoose";

const employeesSchema = new Schema({
name: {
    type: String,
    require: true
},
lastname: {
    type: String,
    require: true
},
email: {
    type: String,
    require: true,
},
password: {
    type: String,
    require: true,
    min: 8
},
birthdate: {
    type: Date,
    require: true,
    min: 0
},
photo: {
    type: String,
    require: false
}
}, {
    timestamps: true,
    strict: false
})

export default model("Employees", employeesSchema)