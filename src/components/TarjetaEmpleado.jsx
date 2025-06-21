import { Card } from "react-bootstrap";
// import {man, man1, man2, woman1, woman2, woman3} from "../assets"

const TarjetaEmpleado = ({ empleadoProps }) => {
  const { fullName, title, department, pic } = empleadoProps;

  return (
    <section className="p-3 ">
      <div className="card mb-3 shadow border-primary">
        <div className="row g-0 align-items-center">
          <div className="col-md-2 d-flex justify-content-center">
            <img
              src={pic}
              alt={fullName}
              className="imgEmpleado"
            />
          </div>

          <div className="col-md-10">
            <Card className="bg-body-secondary">
              <Card.Title className="m-2">Nombre: {fullName}</Card.Title>
              <Card.Body className="fondoFormulario">
                <div className="d-flex fw-bold">
                  {title}:
                  <div className="ms-1 bg-primary-subtle px-2 fw-normal">
                    {department}</div>
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TarjetaEmpleado;
