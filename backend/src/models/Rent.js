import { Schema, model} from "mongoose";

const rentSchema = new Schema({
idRentalApp: {
    type: Schema.Types.ObjectId,
    ref: "RentalApp",
    require: true
},
startDate: {
    type: Date,
    require: true,
},
endDate: {
    type: Date,
    require: true,
    min: 5
},
depositPaid: {
    type: String,
    require: false
},
carTransmission: {
    type: String,
    require: true
},
fuelType: {
    type: String,
    require: true
},
passengerCapacity: {
    type: Number,
    require: true
},
typeVehicle: {
    type: String,
    require: true
},
radio: {
    type: String,
    require: true
},
traction: {
    type: String,
    require: true
},
rims: {
    type: String,
    require: true
},
tire: {
    type: String,
    require: true
},
mileage: {
    type: Number,
    require: true,
},
engine: {
    type: String,
    require: true
},
color: {
    type: String,
    require: true
},
serialNumber: {
    type: String,
    require: true
},
state: {
    type: String,
    require: true
},
commercialUse: {
    type: String,
    require: true
},
purchasePrice: {
    type: Number,
    require: true
},
offer: [
    {
        percentage: {
            type: Number,
            require: true,
        },
        level: {
            type: Number,
            require: true,
        },
    },
],
deposit: {
    type: Number,
    require: true
},
acquisitionDate: {
    type: Date,
    require: true
}

}, {
    timestamps: true,
    strict: false
})

export default model("Rent", rentSchema)