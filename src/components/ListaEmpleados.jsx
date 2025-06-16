import TarjetaEmpleado from "./TarjetaEmpleado";

const ListaEmpleados = () => {
  const empleados = [
    {
      id: 1,
      fullName: "Laya Dueñas",
      title: "CEO",
      department: "Business",
      pic: "../assets/woman (1).png",
    },
    {
      id: 2,
      fullName: "Astryd Vallés",
      title: "CMO",
      department: "Marketing",
      pic: "../assets/woman.png",
    },
    {
      id: 3,
      fullName: "Shantell Meza",
      title: "CFO",
      department: "Business",
      pic: "../assets/woman_4140078.png",
    },
    {
      id: 4,
      fullName: "Sergio Ocampo",
      title: "CTO",
      department: "Engineering",
      pic: "../assets/man.png",
    },
    {
      id: 5,
      fullName: "Ares Jiménez",
      title: "Art Director",
      department: "Marketing",
      pic: "../assets/man_4140048.png",
    },
    {
      id: 6,
      fullName: "Juan Pérez",
      title: "Frontend Dev",
      department: "Engineering",
      pic: "../assets/man_4140079.png",
    },
  ];

  return (
    <div>
      <TarjetaEmpleado />
    </div>
  );
};

export default ListaEmpleados;
