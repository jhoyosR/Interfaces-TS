// Definición de la interfaz Database
interface Database {
    connect(): void;
    find(query: string): void;
    update(query: string, data: any): void;
    // Puedes agregar más métodos según tus necesidades
  }
  
  // Implementación de MySQLDatabase que implementa la interfaz Database
  class MySQLDatabase implements Database {
    connect(): void {
      console.log("Conectado a la base de datos MySQL");
    }
  
    find(query: string): void {
      console.log("Ejecutando consulta MySQL: " + query);
      // Lógica para buscar en la base de datos MySQL
    }
  
    update(query: string, data: any): void {
      console.log("Ejecutando actualización MySQL: " + query);
      // Lógica para actualizar en la base de datos MySQL
    }
  }
  
  // Implementación de SQLiteDatabase que implementa la interfaz Database
  class SQLiteDatabase implements Database {
    connect(): void {
      console.log("Conectado a la base de datos SQLite");
    }
  
    find(query: string): void {
      console.log("Ejecutando consulta SQLite: " + query);
      // Lógica para buscar en la base de datos SQLite
    }
  
    update(query: string, data: any): void {
      console.log("Ejecutando actualización SQLite: " + query);
      // Lógica para actualizar en la base de datos SQLite
    }
  }
  
 