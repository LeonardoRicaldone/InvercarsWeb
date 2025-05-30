import { Schema, model} from "mongoose";

const rentalAppSchema = new Schema({
idModel: {
    type: Schema.Types.ObjectId,
    ref: "Models",
    require: true
},
idBrand: {
    type: Schema.Types.ObjectId,
    ref: "Brands",
    require: true
},
photoLicense: {
    type: String,
    require: true
},
photoDUI: {
    type: String,
    require: true
},
phone: {
    type: String,
    require: true,
},
address: {
    type: String,
    require: true,
    min: 8
},
email: {
    type: String,
    require: true
},
applicationDate: {
    type: Date,
    require: false
},
startDate: {
    type: Date,
    require: true,
},
endDate: {
    type: Date,
    require: true
},
state: {
    type: Date,
    require: true,
    min: 0
},
paymentMethod: {
    type: String,
    require: false
}
}, {
    timestamps: true,
    strict: false
})

export default model("RentalApp", rentalAppSchema)