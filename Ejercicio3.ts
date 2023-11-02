// Definición de la interfaz Product
interface Product {
    name: string;
    price: number;
    // Puedes agregar más propiedades relacionadas con el producto aquí
  }
  
  // Definición de la interfaz Inventory
  interface Inventory {
    products: Product[];
    addProduct(product: Product): void;
    findProductByName(name: string): Product | undefined;
  }
  
  // Implementación de la interfaz Inventory
  class InventoryClass implements Inventory {
    products: Product[] = [];
  
    addProduct(product: Product): void {
      this.products.push(product);
    }
  
    findProductByName(name: string): Product | undefined {
      return this.products.find((product) => product.name === name);
    }
  }
  
  // Ejemplo de uso
  const inventory = new InventoryClass();
  
  const product1: Product = {
      name: "Laptop",
      price: 1000,
      id: 0
  };
  
  const product2: Product = {
      name: "Smartphone",
      price: 500,
      id: 0
  };
  
  inventory.addProduct(product1);
  inventory.addProduct(product2);
  
  const searchResult = inventory.findProductByName("Laptop");
  if (searchResult) {
    console.log("Product found:", searchResult.name, "Price: $" + searchResult.price);
  } else {
    console.log("Product not found.");
  }
  