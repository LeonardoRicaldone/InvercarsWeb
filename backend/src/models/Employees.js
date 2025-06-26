import { Schema, model} from "mongoose";

const employeesSchema = new Schema({
name: {
    type: String,
    required: true
},
lastname: {
    type: String,
    required: true
},
email: {
    type: String,
    required: true,
},
password: {
    type: String,
    required: true,
    min: 8
},
birthdate: {
    type: Date,
    required: true
},
photo: {
    type: String,
    required: false
}
}, {
    timestamps: true,
    strict: false
})

export default model("Employees", employeesSchema)