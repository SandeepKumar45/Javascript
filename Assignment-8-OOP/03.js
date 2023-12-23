class Temperature{
    constructor(){
        this.celsius = 0;
        this.fahrenheit = 32;
    }
    get celsius(){
        return (this._celsius);
    }
    set celsius(value){
        this._celsius = value;
        this._Fahrenheit = ((value*(9/5))+32).toFixed(0);
    }
    get fahrenheit(){
        return (this._Fahrenheit);
    }
    set fahrenheit(value){
        this._Fahrenheit = value;
        this._celsius = ((value-32) * (5/9)).toFixed(0);
    }
}

const temperature = new Temperature();

console.log(`Initial Celsius ${temperature.celsius}°C`);
console.log(`Initial Fahrenheit ${temperature.fahrenheit}°F`);

temperature.celsius = 25;
console.log(`Celsius: ${temperature.celsius}°C`);
console.log(`Fahrenheit: ${temperature.fahrenheit}°F`);

temperature.fahrenheit = 8;
console.log(`Celsius: ${temperature.celsius}°C`);
console.log(`Fahrenheit: ${temperature.fahrenheit}°F`);

