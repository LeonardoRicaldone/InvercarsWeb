import { Schema, model} from "mongoose";

const purchaseReqSchema = new Schema({
idCar: {
    type: Schema.Types.ObjectId,
    ref: "Cars",
    required: true
},
idClient: {
    type: Schema.Types.ObjectId,
    ref: "Clients",
    required: true
},
name: {
    type: String,
    required: true,
},
lastname: {
    type: String,
    required: true
},
email: {
    type: String,
    required: true
},
birthdate: {
    type: Date,
    required: true
},
phone: {
    type: Number,
    required: true
},
address: {
    type: String,
    required: true
},
photocopyOfDui: {
    type: String,
    required: false
},
proofOfSalary: {
    type: String,
    required: false
},
afpAccountStatement: {
    type: String,
    required: false
},
license: {
    type: String,
    required: false
},
personalEmploymentReferences: {
    type: String,
    required: false
},
utilityReceipt: {
    type: String,
    required: false
},
copiesIvaIncome: {
    type: String,
    required: false
},
paymentMethodOptions: {
    type: String,
    required: false
},
requestDate: {
    type: Date,
    required: false
},
status: {
    type: Boolean,
    required: false
},
typeRequest: {
    type: String,
    required: false
}
}, {
    timestamps: true,
    strict: false
})

export default model("PurchaseRequest", purchaseReqSchema)