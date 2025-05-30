import { Schema, Types, model} from "mongoose";

const ordersCarsSchema = new Schema({
idClient: {
    type: Schema.Types.ObjectId,
    ref: "Clients",
    require: true
},
comment: {
    type: String,
    require: true
},
brand: {
    type: String,
    require: true,
},
model: {
    type: String,
    require: true,
    min: 8
},
year: {
    type: Date,
    require: true,
    min: 0
},
engine: {
    type: String,
    require: false
},
cylinders: {
    type: String,
    require: true,
},
transmission: {
    type: String,
    require: true,
    min: 8
},
drivetrain: {
    type: Date,
    require: true,
    min: 0
},
dateRequest: {
    type: String,
    require: false
}
}, {
    timestamps: true,
    strict: false
})

export default model("OrdersCars", ordersCarsSchema)