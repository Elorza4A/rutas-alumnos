import type { Alumno } from "../../types/Alumno"
import './FilaAlumno.css'
import { useNavigate} from 'react-router-dom'

interface Props {
    Alumno: Alumno;
}

export default function FilaAlumno({ Alumno }: Props) {

    const navigate = useNavigate();

    const nombreCompleto = `${Alumno.Nombre} ${Alumno.ApellidoPaterno} ${Alumno.ApellidoMaterno}`

    const handleVerDetalle = () => {
        navigate(`/alumnos/perfil?id=${Alumno.Matricula}`);
    }
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
                    <button onClick={() => handleVerDetalle()}>Ver detalle</button>
                </td>
            </tr>
        </>
    )
}