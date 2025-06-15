import { Schema, Types, model} from "mongoose";

const financingSchema = new Schema({
idPurchaseRequest : {
    type: Schema.Types.ObjectId,
    ref: "PurchaseRequest",
    required: true
},
downPaymentPercentage: {
    type: Number,
    required: true
},
downPaymentAmount: {
    type: Number,
    required: true,
},
term: {
    type: Number,
    required: true
},
interestRate: {
    type: Number,
    required: true
},
lateFeeRate: {
    type: Number,
    required: true
},
startDate: {
    type: Date,
    required: true,
},
totalAmount: {
    type: Number,
    required: true
},
status: {
    type: String,
    required: true
},
payments: [
    {
        paymentsInstallmentNumber: {
            type: Number,
            required: true,
        },
        paymentsDueDate: {
            type: Date,
            required: true,
        },
        paymentsAmount: {
            type: Number,
            required: true,
        },
        paymentsPrincipal: {
            type: Number,
            required: true,
        },
        paymentsInterest: {
            type: Number,
            required: true,
        },
        paymentsIva: {
            type: Number,
            required: true,
        },
        paymentsStatus: {
            type: String,
            required: true,
        },
        paymentsPaymentDate: {
            type: Date,
            required: true,
        },
        paymentsLateFee: {
            type: Number,
            required: true,
        },
    },
],
}, {
    timestamps: true,
    strict: false
})

export default model("Financing", financingSchema)