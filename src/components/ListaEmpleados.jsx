import TarjetaEmpleado from "./TarjetaEmpleado";

const ListaEmpleados = () => {
  const empleados = [
    {
      id: 1,
      fullName: "Laya Dueñas",
      title: "CEO",
      department: "Business",
      pic: "/assets/woman1.png",
    },
    {
      id: 2,
      fullName: "Astryd Vallés",
      title: "CMO",
      department: "Marketing",
      pic: "/assets/woman2.png",
    },
    {
      id: 3,
      fullName: "Shantell Meza",
      title: "CFO",
      department: "Business",
      pic: "/assets/woman3.png",
    },
    {
      id: 4,
      fullName: "Sergio Ocampo",
      title: "CTO",
      department: "Engineering",
      pic: "/assets/man.png",
    },
    {
      id: 5,
      fullName: "Ares Jiménez",
      title: "Art Director",
      department: "Marketing",
      pic: "/assets/man1.png",
    },
    {
      id: 6,
      fullName: "Juan Pérez",
      title: "Frontend Dev",
      department: "Engineering",
      pic: "/assets/man2.png",
    },
    {
      id: 7,
      fullName: "Ellen Balderas",
      title: "Digital Strategist",
      department: "Marketing",
      pic: "/assets/woman1.png",
    },
    {
      id: 8,
      fullName: "Cynthia Valentín",
      title: "Backend Dev",
      department: "Engineering",
      pic: "/assets/woman2.png",
    },
    {
      id: 9,
      fullName: "Bernard Jung",
      title: "DevOps Engineer",
      department: "Engineering",
      pic: "/assets/man1.png",
    },
  ];

  return (
    <div className="shadow">
      {empleados.map((empleado) => (
        <TarjetaEmpleado key={empleado.id} empleadoProps={empleado} />
      ))}
    </div>
  );
};

export default ListaEmpleados;
