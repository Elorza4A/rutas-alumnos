import { useEffect, useState } from "react"
import TablaAlumnos from "./TablaAlumnos"
import { type Alumno, listaAlumnos } from "../../types/Alumno";

export default function Alumnos() {

    const [listadoAlumnos, setListadoAlumnos] = useState<Alumno[]>([]);

    useEffect(() => {
        setListadoAlumnos(listaAlumnos);
    }, []);


    return (
        <>
            <h2>Alumnos</h2>
            <TablaAlumnos Alumnos={listadoAlumnos} />
        </>
    )
}