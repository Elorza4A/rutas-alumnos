import { useEffect, useState, useRef } from 'react';
import { listaAlumnos, type Alumno } from '../../types/Alumno';
import { useSearchParams } from 'react-router-dom';

import './DetalleAlumno.css'

export default function DetalleAlumno() {
    const [searchParams] = useSearchParams();
    const [alumnoInfo, setAlumnoInfo] = useState<Alumno | undefined>(undefined);
    const [deshabilitar, setDeshabilitar] = useState<Boolean>(false);
    const matricula = searchParams.get('id');
    
    useEffect(() => {
        const alumnoEncontrado = listaAlumnos.find((alumno) => alumno.Matricula == matricula);
        
        if (alumnoEncontrado) {
            setAlumnoInfo(alumnoEncontrado);
            setDeshabilitar(true);
        }
    }, [matricula]);

    if (!alumnoInfo) {
        return <p>Cargando información del alumno...</p>;
    }

    return (
        <>         
            
            <form>
                <fieldset>
                    <legend>Detalle alumno</legend>
                <div>
                    <label>Matrícula</label>
                    <input 
                        type="text" 
                        name="Matricula"
                        defaultValue={alumnoInfo.Matricula} 
                    />
                </div>

                <div>
                    <label>Nombre</label>
                    <input 
                        type="text" 
                        name="Nombre"
                        defaultValue={alumnoInfo.Nombre} 
                    />
                </div>

                <div>
                    <label>Apellido Paterno</label>
                    <input 
                        type="text" 
                        name="ApellidoPaterno"
                        defaultValue={alumnoInfo.ApellidoPaterno} 
                    />
                </div>

                <div>
                    <label>Apellido Materno</label>
                    <input 
                        type="text" 
                        name="ApellidoMaterno"
                        defaultValue={alumnoInfo.ApellidoMaterno} 
                    />
                </div>

                <div>
                    <label htmlFor="carrera">Carrera</label>
                    <select 
                        name="Carrera" 
                        id="carrera"
                        defaultValue={alumnoInfo.Carrera}
                    >
                        <option value="" disabled>Selecciona una carrera</option>
                        <option value="LCC">Licenciatura en Ciencias Computacionales</option>
                        <option value="LFC">Licenciatura en Física</option>
                        <option value="LM">Licenciatura en Matemáticas</option>
                        <option value="LA">Licenciatura en Actuaría</option>
                        <option value="LSTI">Licenciatura en Seguridad Tecnológica de la Información</option>
                        <option value="LMAD">Licenciatura en Multimedia y Animación Digital</option>
                    </select>
                </div>

                <div>
                    <label>Semestre</label>
                    <input 
                        type="number" 
                        name="Semestre"
                        defaultValue={alumnoInfo.Semestre} 
                    />
                </div>

                <div>
                    <label>Promedio</label>
                    <input 
                        type="number" 
                        name="Promedio"
                        defaultValue={alumnoInfo.Promedio} 
                    />
                </div>
                </fieldset>
            </form>
        </>
    );
}