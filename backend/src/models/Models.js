import { Schema, Types, model} from "mongoose";

const modelsSchema = new Schema({
name: {
    type: String,
    require: true
},
idBrand: {
    type: Schema.Types.ObjectId,
    ref: "Brands",
    require: true
}
}, {
    timestamps: true,
    strict: false
})

export default model("Models", modelsSchema)