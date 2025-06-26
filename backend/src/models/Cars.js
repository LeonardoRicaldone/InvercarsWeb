import { Schema, model} from "mongoose";

const carsSchema = new Schema({
idModel: {
    type: Schema.Types.ObjectId,
    ref: "Models",
    required: true
},
description: {
    type: String,
    required: true
},
year: {
    type: String,
    require: true,
},
licensePlate: {
    type: String,
    required: true,
    min: 5
},
images: {
    type: [
      {
        image: {
          type: String,
          required: false,
          //match: /^https?:\/\/.+\.(jpg|jpeg|png|webp|avif|gif|svg)$/i // Validación
        },
        _id: false,
      }
    ],
    validate: {
      validator: function (arr) {
        return arr.length <= 5;
      },
      message: 'Solo se permiten hasta 5 imágenes.'
    }
},
//Manera para guardar el array de imagenes más simple(solo las url)
/*images: {
  type: [String],
  validate: {
    validator: function (arr) {
      return arr.length <= 5;
    },
    message: 'Solo se permiten hasta 5 imágenes.'
  }
},*/
carTransmission: {
    type: String,
    required: true
},
fuelType: {
    type: String,
    required: true
},
passengerCapacity: {
    type: Number,
    required: true
},
typeVehicle: {
    type: String,
    required: true
},
radio: {
    type: String,
    required: false
},
airConditioning: {
    type: Boolean,
    required: true
},
traction: {
    type: String,
    required: true
},
rims: {
    type: String,
    required: true
},
mileage: {
    type: Number,
    required: true,
},
engine: {
    type: String,
    required: true
},
color: {
    type: String,
    required: true
},
serialNumber: {
    type: String,
    required: false
},
state: {
    type: String,
    required: true
},
commercialUse: {
    type: String,
    required: true
},
rentalCostPerDay: {
    type: String,
    required: false
},
purchasePrice: {
    type: Number,
    required: false
},
offer: [
    {
        percentage: {
            type: Number,
            required: false,
        },
        level: {
            type: Number,
            required: false,
        },
    },
],
deposit: {
    type: Number,
    required: true
},
acquisitionDate: {
    type: Date,
    required: true
}

}, {
    timestamps: true,
    strict: false
})

export default model("Cars", carsSchema)