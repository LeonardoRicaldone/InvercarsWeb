import { Schema, model} from "mongoose";

const purchaseReqSchema = new Schema({
idCar: {
    type: Schema.Types.ObjectId,
    ref: "Cars",
    require: true
},
idClient: {
    type: Schema.Types.ObjectId,
    ref: "Clients",
    require: true
},
name: {
    type: String,
    require: true,
},
lastname: {
    type: String,
    require: true
},
email: {
    type: String,
    require: true
},
birthdate: {
    type: Date,
    require: true
},
phone: {
    type: Number,
    require: true
},
address: {
    type: String,
    require: true
},
photocopyOfDui: {
    type: String,
    require: true
},
proofOfSalary: {
    type: String,
    require: true
},
afpAccountStatement: {
    type: String,
    require: true
},
license: {
    type: String,
    require: true
},
personalEmploymentReferences: {
    type: String,
    require: true
},
utilityReceipt: {
    type: String,
    require: true,
},
copiesIvaIncome: {
    type: String,
    require: true
},
paymentMethodOptions: {
    type: String,
    require: true
},
requestDate: {
    type: Date,
    require: true
},
status: {
    type: Boolean,
    require: true
},
typeRequest: {
    type: String,
    require: true
}
}, {
    timestamps: true,
    strict: false
})

export default model("PurchaseRequest", purchaseReqSchema)