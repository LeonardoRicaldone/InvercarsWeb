import { Schema, model} from "mongoose";

const clientsSchema = new Schema({
name: {
    type: String,
    required: true
},
lastname: {
    type: String,
    required: true
},
birthdate: {
    type: Date,
    required: true,
},
email: {
    type: String,
    required: true,
},
password: {
    type: String,
    required: true,
    min: 8
},
photo: {
    type: String,
    required: false
},
offerLevel: {
    type: String,
    required: false
},
favorites: [
    {
        _id: false,
        idCar: {
            type: Schema.Types.ObjectId,
            ref: "Cars",
            required: false,
        },
    },
],
history: [
    {
        idCar: {
            type: Schema.Types.ObjectId,
            ref: "Cars",
            required: false,
        },
    },
]
}, {
    timestamps: true,
    strict: false
})

export default model("Clients", clientsSchema)