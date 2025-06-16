import "bootstrap/dist/css/bootstrap.min.css";
import ListaEmpleados from "./components/ListaEmpleados"

function App() {
  return <>
    <main className="container my-4">
        <h1 className="text-center">Lista de empleados</h1>
        <ListaEmpleados/>
      </main>
      <footer className="bg-dark text-light text-center py-3">&copy; Todos los derechos reservados</footer>

  </>;
}

export default App;
