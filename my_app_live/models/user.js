const mongoose = require('mongoose');

//crear modelo de datos para mogoDB
const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    age: { type: Number, required: true },
});

//crear metodo para el modelo de datos
userSchema.methods.isAdult = function() {
    return this.age >= 18;
};

//crear modelo de datos para exportar el modulo
const userModel = mongoose.model('User', userSchema);
module.exports = userModel;