import type { Alumno } from "../../types/Alumno"
import './FilaAlumno.css'

interface Props {
    Alumno: Alumno;
}

export default function FilaAlumno({ Alumno }: Props) {

    const nombreCompleto = `${Alumno.Nombre} ${Alumno.ApellidoPaterno} ${Alumno.ApellidoMaterno}`

    return (
        <>
            <tr>
                <td className="col-estudiante">
                    <div className="estudiante">
                        <img
                            style={{ width: '50px', height: '50px' }}
                            src={`https://api.dicebear.com/10.x/avataaars/svg?seed==${Alumno.Nombre}`}
                            alt={`Avatar de ${Alumno.Nombre}`} />


                        <p className="estudiante-nombre">
                            {nombreCompleto}
                        </p>
                    </div>
                </td>
                <td className="text-center">{Alumno.Matricula}</td>
                <td>{Alumno.Carrera}</td>
                <td className="text-center">{Alumno.Semestre}</td>
                <td className="text-center">{Alumno.Promedio}</td>
                <td>
                    <button>Ver detalle</button>
                </td>
            </tr>
        </>
    )
}