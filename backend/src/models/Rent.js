import { Schema, model} from "mongoose";

const rentSchema = new Schema({
idRentalApplication: {
    type: Schema.Types.ObjectId,
    ref: "RentalApplication",
    require: true
},
depositPaid: {
    type: String,
    required: true
},
depositState: {
    type: Boolean,
    required: true
},
actualReturnDate: {
    type: Date,
    required: true
},
startedConditions: [
    {
        fuelLevelStarted: {
            type: String,
            required: true
        },
        mileageStarted: {
            type: Number,
            required: true
        }
    }
],
preExistingDamage: [
    {
        description: {
            type: String,
            required: false
        },
        photo: {
            type: String,
            required: false
        }
    }
],
reviews: [
    {
        comment: {
            type: String,
            required: true
        }
    }
],
depositReturned: {
    type: Number,
    required: true
},
returnConditions: [
    {
        fuelLevelReturned: {
            type: String,
            required: true
        },
        mileageReturned: {
            type: Number,
            required: true
        }
    }
],
additionalCharges: [
    {
        description: {
            type: String,
            required: true
        },
        amount: {
            type: Number,
            required: true
        }
    }
],
payments: [
    {
        amount: {
            type: Number,
            required: true
        },
        method: {
            type: String,
            required: true
        },
        reference: {
            type: String,
            required: false
        }
    }
],
totalCost: {
    type: Number,
    required: false
},
state: {
    type: String,
    required: false
}
}, {
    timestamps: true,
    strict: false
})

export default model("Rent", rentSchema)