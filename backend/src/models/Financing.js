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
        paymentsinstallmentNumber: {
            type: Number,
            required: true,
        },
        paymentsdueDate: {
            type: Date,
            required: true,
        },
        paymentsamount: {
            type: Number,
            required: true,
        },
        paymentsprincipal: {
            type: Number,
            required: true,
        },
        paymentsinterest: {
            type: Number,
            required: true,
        },
        paymentsiva: {
            type: Number,
            required: true,
        },
        paymentsstatus: {
            type: String,
            required: true,
        },
        paymentspaymentDate: {
            type: Date,
            required: true,
        },
        paymentslateFee: {
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