// // Задача 1.

function CarInfo(carModel = '', carAge = 0) {

    this.carModel = carModel;

    this.carAge = carAge;

    this.getCarModel = function() {
        return this.carModel.charAt(0).toUpperCase() + this.carModel.slice(1)
    };

    this.getCarOld = function() {
        return (new Date()).getFullYear() - this.carAge;
    };
}


// // Задача 2.


function EncryptedString (str) {

    this.originalString = function() {
        return str;
    };

    this.revString = function () {
        return str.split('').reverse().join('');
    }; 

}
