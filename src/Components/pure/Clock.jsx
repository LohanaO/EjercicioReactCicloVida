import React,{useState,useEffect} from 'react';


const Clock = () => {
    const PreState={
        fecha: new Date(),
        edad:0,
        nombre:'Lohana',
        apellido:'Orellano'
 }

 const [user, setUser] = useState(PreState);

 useEffect(() => {
    const intervalEdad = setInterval(() => {
        actualiceuser();
        
    }, 1000);
    return () => {
        clearInterval(intervalEdad)
    };
 }, );


    const actualiceuser = () => {
        return setUser({
            fecha:user.fecha,
            edad:user.edad+1,
            nombre:user.nombre,
            apellido:user.apellido

        });

    }
    return (
        <div>
            <h2>Hora actual: {user.fecha.toLocaleTimeString()}</h2>
            <h3> {user.nombre} {user.apellido}</h3>
            <h1>Edad: {user.edad}</h1>
        </div>
    );
}

export default Clock;
