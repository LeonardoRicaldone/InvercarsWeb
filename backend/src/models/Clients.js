import { Schema, model} from "mongoose";

const clientsSchema = new Schema({
name: {
    type: String,
    require: true
},
lastname: {
    type: String,
    require: true
},
birthdate: {
    type: Date,
    require: true,
    min: 0
},
email: {
    type: String,
    require: true,
},
password: {
    type: String,
    require: true,
    min: 8
},
photo: {
    type: String,
    require: false
},
offerLevel: {
    type: String,
    require: false
},
favorites: [
    {
        idCar: {
            type: Schema.Types.ObjectId,
            ref: "Cars",
            require: false,
        },
    },
],
history: [
    {
        idCar: {
            type: Schema.Types.ObjectId,
            ref: "Cars",
            require: false,
        },
    },
]
}, {
    timestamps: true,
    strict: false
})

export default model("Clients", clientsSchema)