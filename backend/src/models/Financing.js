import { Schema, Types, model} from "mongoose";

const financingSchema = new Schema({
idPurchaseReq : {
    type: Schema.Types.ObjectId,
    ref: "PurchaseRequest",
    require: true
},
downPaymentPercentage: {
    type: String,
    require: true
},
downPaymentAmount : {
    type: Number,
    require: true,
},
term: {
    type: Number,
    require: true
},
interestRate : {
    type: Number,
    require: true
},
lateFeeRate : {
    type: Number,
    require: true
},
startDate : {
    type: Date,
    require: true,
},
totalAmount : {
    type: Number,
    require: true
},
status: {
    type: String,
    require: true
},
payments: [
    {
        paymentsinstallmentNumber: {
            type: Number,
            require: true,
        },
        paymentsdueDate: {
            type: Date,
            require: true,
        },
        paymentsamount: {
            type: Number,
            require: true,
        },
        paymentsprincipal: {
            type: Number,
            require: true,
        },
        paymentsinterest: {
            type: Number,
            require: true,
        },
        paymentsiva: {
            type: Number,
            require: true,
        },
        paymentsstatus: {
            type: String,
            require: true,
        },
        paymentspaymentDate: {
            type: Date,
            require: true,
        },
        paymentslateFee: {
            type: Number,
            require: true,
        },
    },
],
}, {
    timestamps: true,
    strict: false
})

export default model("Financing", financingSchema)