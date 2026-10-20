
import FilaAlumno from "./FilaAlumno";
import type { Alumno } from "../../types/Alumno"
import './TablaAlumno.css';

interface Props {
    Alumnos: Alumno[];
}

export default function TablaAlumnos({ Alumnos }: Props) {
    return (
        <table className="tbl-alumnos">
            <thead className="tbl-head">
                <tr>
                    <th>Estudiante</th>
                    <th>Matrícula</th>
                    <th>Carrera</th>
                    <th>Semestre</th>
                    <th>Promedio</th>
                    <th>Opciones</th>
                </tr>
            </thead>
            <tbody className="tbl-body">
                {
                    Alumnos.length > 0
                        ? Alumnos.map((alumno, key) => {
                            return <FilaAlumno Alumno={alumno} key={alumno.Matricula} />
                        })
                        : <tr>
                            <td>No hay alumnos por mostrar.</td>
                        </tr>
                }
            </tbody>
        </table>
    )
}