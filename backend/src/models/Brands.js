import { Schema, model} from "mongoose";

const brandsSchema = new Schema({
name: {
    type: String,
    require: true
},
logo: {
    type: String,
    require: false
}
}, {
    timestamps: true,
    strict: false
})

export default model("Brands", brandsSchema)