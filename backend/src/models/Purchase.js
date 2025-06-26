import { Schema, model} from "mongoose";

const purchaseSchema = new Schema({
idPurchaseRequest: {
    type: Schema.Types.ObjectId,
    ref: "PurchaseRequest",
    required: true
},
idOrderCar: {
    type: Schema.Types.ObjectId,
    ref: "OrdersCars",
    required: false
},
purchaseType: {
    type: String,
    required: true
},
amount: {
    type: Number,
    required: true
},
paymentStatus: {
    type: String,
    required: true
},
purchaseDate: {
    type: Date,
    required: true
},
state: {
    type: String,
    required: true
},
directPurchase: [
    {
        paymentMethod: {
            type: String,
            required: false
        },
        transactionId: {
            type: String,
            required: false
        },
        paid: {
            type: Boolean,
            required: false
        },
        paymentDate: {
            type: Date,
            required: false
        },
        deliveryDate: {
            type: Date,
            required: false
        }
    }
],
financingPurchase: [
    {
        idFinancing: {
            type: Schema.Types.ObjectId,
            ref: "Financing",
            required: false
        },
        downPaymentAmount: {
            type: Number,
            required: false
        },
        downPaymentPaid: {
            type: Boolean,
            required: false
        },
        downPaymentDate: {
            type: Date,
            required: false
        },
        deliveryDate: {
            type: Date,
            required: false
        }
    }
],
//PURCHASE WITH IMPORT (COULD BE AN ARRAY WHERE WE PUT ALL THE PAYMENT ARRAYS (MORE CLEANER))
initialDeposit: [
    {
        amount: {
            type: Number,
            required: false
        },
        paid: {
            type: Boolean,
            required: false
        },
        date: {
            type: Date,
            required: false
        }
    }
],
vehiclePurchase: [
    {
        vehiclePrice: {
            type: Number,
            required: false
        },
        commission: {
            type: Number,
            required: false
        },
        transferFee: {
            type: Number,
            required: false
        },
        bankFee: {
            type: Number,
            required: false
        },
        paid: {
            type: Boolean,
            required: false
        },
        date: {
            type: Date,
            required: false
        }
    }
],
vehicleTransport: [
    {
        costTransport: {
            type: Number,
            required: false
        },
        costCrane: {
            type: Number,
            required: false
        }
    }
],
customs: [
    {
        freightCost: {
            type: Number,
            required: false
        },
        taxAmount: {
            type: Number,
            required: false
        },
        paid: {
            type: Boolean,
            required: false
        },
        date: {
            type: Date,
            required: false
        }
    }
],
delivery: [
    {
        saleValue: {
            type: Number,
            required: false
        },
        accountPayment: {
            type: Number,
            required: false
        },
        repairOption: {
            type: Boolean,
            required: false
        },
        paid: {
            type: Boolean,
            required: false
        },
        date: {
            type: Date,
            required: false
        }
    }
],
additionalCharges: [
    {
        type: {
            type: String, 
            required: false
        },
        amount: {
            type: Number,
            required: false
        },
        paid: {
            type: Boolean,
            required: false
        },
        date: {
            type: Date,
            required: false
        }
    }
]
}, {
    timestamps: true,
    strict: false
})

export default model("Purchase", purchaseSchema)