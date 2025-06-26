import { Schema, Types, model} from "mongoose";

const ordersCarsSchema = new Schema({
idClient: {
    type: Schema.Types.ObjectId,
    ref: "Clients",
    required: true
},
comment: {
    type: String,
    required: true
},
brand: {
    type: String,
    required: true,
},
model: {
    type: String,
    required: true,
},
year: {
    type: Date,
    required: true,
    min: 0
},
engine: {
    type: String,
    required: false
},
cylinders: {
    type: String,
    required: true,
},
transmission: {
    type: String,
    required: true,
    min: 8
},
drivetrain: {
    type: Date,
    required: true,
    min: 0
},
dateRequest: {
    type: String,
    required: false
},
status: {
    type: String,
    required: true
}
}, {
    timestamps: true,
    strict: false
})

export default model("OrdersCars", ordersCarsSchema)