import { Card } from "react-bootstrap";
import { Badge } from "react-bootstrap";

const TarjetaEmpleado = ({ empleadoProps }) => {
  const { fullName, title, department, pic } = empleadoProps;

  return (
    <section className="p-3 bg-primary-subtle">
      <div className="card mb-3 shadow border-primary">
        <div className="row g-0 align-items-center">
          <div className="col-md-2 d-flex justify-content-center">
            <img
              src={pic}
              alt={fullName}
              className="imgEmpleado"
            />
          </div>

          <div className="col-md-10 my-3 ">
            <Card className="bg-body-secondary ">
              <Card.Title className="m-2">Nombre: {fullName}</Card.Title>
              <Card.Body className="p-3 rounded-3 bg-white">
                <div className="d-flex fw-bold">
                  {title}:
                  <Badge className="ms-1 bg-primary-subtle px-2 fw-normal rounded-2 text-dark">
                    {department}</Badge>
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
