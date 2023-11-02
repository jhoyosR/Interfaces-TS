// Definición de la interfaz BaseObject con una propiedad id
interface BaseObject {
    id: number;
  }
  
  // Definición de la interfaz User que hereda de BaseObject
  interface User extends BaseObject {
    name: string;
    email: string;
  }
  
  // Definición de la interfaz Product que hereda de BaseObject
  interface Product extends BaseObject {
    name: string;
    price: number;
  }
  
  // Definición de la interfaz Order que hereda de BaseObject
  interface Order extends BaseObject {
    userId: number;
    productId: number;
    quantity: number;
  }
  
  // Función genérica para imprimir los datos de cualquier objeto que implemente BaseObject
  function printData<T extends BaseObject>(obj: T) {
    console.log("ID:", obj.id);
    // Aquí puedes agregar más propiedades específicas del objeto para imprimir
  }
  
  // Ejemplo de uso
  const user: User = {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      username: ""
  };
  
  const product: Product = {
    id: 101,
    name: "Laptop",
    price: 1000,
  };
  
  const order: Order = {
    id: 1001,
    userId: 1,
    productId: 101,
    quantity: 2,
  };
  
  console.log("User Data:");
  printData(user);
  console.log("\nProduct Data:");
  printData(product);
  console.log("\nOrder Data:");
  printData(order);
  