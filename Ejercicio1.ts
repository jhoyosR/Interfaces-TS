// Definición de la interfaz Vehicle
interface Vehicle {
    model: string;
    year: number;
    color: string;
  }
  
  // Definición de la interfaz Car que hereda de Vehicle y agrega propiedades específicas para un automóvil
  interface Car extends Vehicle {
    numberOfDoors: number;
  }
  
  // Definición de la interfaz Motorcycle que hereda de Vehicle y agrega propiedades específicas para una motocicleta
  interface Motorcycle extends Vehicle {
    engineDisplacement: number;
  }
  
  // Implementación de las interfaces en una clase
  class VehicleClass implements Vehicle {
    constructor(
      public model: string,
      public year: number,
      public color: string
    ) {}
  }
  
  class CarClass extends VehicleClass implements Car {
    constructor(
      model: string,
      year: number,
      color: string,
      public numberOfDoors: number
    ) {
      super(model, year, color);
    }
  }
  
  class MotorcycleClass extends VehicleClass implements Motorcycle {
    constructor(
      model: string,
      year: number,
      color: string,
      public engineDisplacement: number
    ) {
      super(model, year, color);
    }
  }
  
  // Ejemplo de uso
  const myCar = new CarClass("Toyota Camry", 2022, "Blue", 4);
  console.log("Car:");
  console.log("Model:", myCar.model);
  console.log("Year:", myCar.year);
  console.log("Color:", myCar.color);
  console.log("Number of Doors:", myCar.numberOfDoors);
  
  const myMotorcycle = new MotorcycleClass("Honda CBR", 2023, "Red", 1000);
  console.log("\nMotorcycle:");
  console.log("Model:", myMotorcycle.model);
  console.log("Year:", myMotorcycle.year);
  console.log("Color:", myMotorcycle.color);
  console.log("Engine Displacement:", myMotorcycle.engineDisplacement);
  