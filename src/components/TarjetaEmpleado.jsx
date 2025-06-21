import { Card } from "react-bootstrap";
// import {man, man1, man2, woman1, woman2, woman3} from "../assets"
import man from "../assets/man.png";

const TarjetaEmpleado = ({empleadoProps}) => {
  
  return (
    <section className="p-3 ">
      <div className="card mb-3 shadow ">
        <div className="row g-0 align-items-center">
          <div className="col-md-2">
            <Card.Img variant="top" src={man} className="imgEmpleado" />
          </div>
          <div className="col-md-10">
            <Card>
              <Card.Title className="m-2">Nombre: {empleadoProps.id}</Card.Title>
              <Card.Body className="fondoFormulario">
                <Card.Text>
                  CEO
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                Business
              </Card.Footer>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TarjetaEmpleado;
