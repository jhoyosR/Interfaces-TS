// Definición de la interfaz User
interface User {
    username: string;
    email: string;
  }
  
  // Definición de la interfaz Admin que hereda de User
  interface Admin extends User {
    isAdmin: boolean;
  }
  
  // Función para imprimir datos de usuario que acepta tanto User como Admin
  function printUserData(user: User | Admin) {
    console.log("Username: " + user.username);
    console.log("Email: " + user.email);
  
    if ("isAdmin" in user && user.isAdmin) {
      console.log("User is an admin.");
    }
  }
  
  // Ejemplo de uso
  const regularUser: User = {
      username: "johndoe",
      email: "john@example.com",
      name: "",
      id: 0
  };
  
  const adminUser: Admin = {
      username: "adminuser",
      email: "admin@example.com",
      isAdmin: true,
      name: "",
      id: 0
  };
  
  printUserData(regularUser);
  console.log("\n");
  printUserData(adminUser);
  