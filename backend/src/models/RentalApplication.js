import { Schema, model} from "mongoose";

const rentalAppSchema = new Schema({
idClient: {
    type: Schema.Types.ObjectId,
    ref: "Clients",
    required: true
},
idCar: {
    type: Schema.Types.ObjectId,
    ref: "Cars",
    required: true
},
location: {
    type: String,
    required: true
},
photoLicense: {
    type: String,
    required: true
},
photoDUI: {
    type: String,
    required: true
},
phone: {
    type: String,
    required: true,
},
address: {
    type: String,
    required: true,
    min: 8
},
email: {
    type: String,
    required: true
},
applicationDate: {
    type: Date,
    required: false
},
startDate: {
    type: Date,
    required: true,
},
endDate: {
    type: Date,
    required: true
},
state: {
    type: Date,
    required: true
},
paymentMethod: {
    type: String,
    required: false
}
}, {
    timestamps: true,
    strict: false
})

export default model("RentalApp", rentalAppSchema)