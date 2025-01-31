import { Component } from '@angular/core';

@Component({
  selector: 'app-areas',
  templateUrl: './areas.component.html',
  styleUrl: './areas.component.css'
})
export class AreasComponent {

  flippedIndex: number | null = null;

  areas = [
    {
      id: 1,
      title: "Derecho Penal",
      image: `<img src="../assets/img/penal.jpg" alt="Derecho Penal">`,
      description: `
          <li><span>&#8226;</span>Querellas y Denuncias</li>
          <li><span>&#8226;</span>Perimetrales</li>
          <li><span>&#8226;</span>Defensas Penales</li>
          <li><span>&#8226;</span>Excarcelación, Exención, Morigeración</li>
          <li><span>&#8226;</span>Abuso sexual</li>
          <li><span>&#8226;</span>Homicidios</li>
          <li><span>&#8226;</span>Lesiones</li>
          <li><span>&#8226;</span>Estafas</li>
          <li><span>&#8226;</span>Robos / Hurtos</li>
          <li><span>&#8226;</span>Amenazas</li>
          <li><span>&#8226;</span>Ciberdelitos</li>
          <li><span>&#8226;</span>Juicios Orales</li>
          <li><span>&#8226;</span>Libertad condicional, Libertad asistida, Habeas Corpus, Traslados</li>
        `,
    },
    {
      id: 2,
      title: "Derecho de Familia",
      image: `<img src="../assets/img/familia.jpg" alt="Derecho de Familia">`,
      description: `
          <li><span>&#8226;</span>Alimentos / incumplimientos de cuota alimentaria</li>
          <li><span>&#8226;</span>Sucesiones</li>
          <li><span>&#8226;</span>Cuidado Personal / Régimen de Comunicación</li>
          <li><span>&#8226;</span>Violencia Familiar</li>
          <li><span>&#8226;</span>Divorcios</li>
          <li><span>&#8226;</span>Guarda de menores</li>
          <li><span>&#8226;</span>Supresión o adición de apellido / Cambio de nombre</li>
          <li><span>&#8226;</span>Filiaciones</li>
          <li><span>&#8226;</span>Adopciones</li>
          <li><span>&#8226;</span>Determinación de la capacidad</li>
          <li><span>&#8226;</span>Autorización para viajes al exterior</li>
        `,
    },
    {
      id: 3,
      title: "Derecho Previsional",
      image: `<img src="../assets/img/previsional.jpg" alt="Derecho Previsional">`,
      description: `
          <li><span>&#8226;</span>Jubilaciones ordinarias</li>
          <li><span>&#8226;</span>Reconocimiento de servicios</li>
          <li><span>&#8226;</span>Jubilación anticipada</li>
          <li><span>&#8226;</span>Moratorias</li>
          <li><span>&#8226;</span>Reconocimiento de aportes por tareas de cuidado.</li>
          <li><span>&#8226;</span>Pensiones</li>
          <li><span>&#8226;</span>Jubilaciones por discapacidad</li>
          <li><span>&#8226;</span>Jubilaciones por minusvalía</li>
          <li><span>&#8226;</span>PUAM</li>
          <li><span>&#8226;</span>Jubilaciones por Servicio Doméstico</li>
        `,
    },
    {
      id: 4,
      title: "Amparos de Salud",
      image: `<img src="../assets/img/salud.jpg" alt="Amparos de Salud">`,
      description: `
          <li><span>&#8226;</span>Negativa de cobertura de prestaciones médicas: tratamientos, intervenciones quirúrgicas, prótesis.</li>
          <li><span>&#8226;</span>Negativa de cobertura del 100% de medicación en tratamientos de fertilización asistida, discapacidad, diabetes, oncología, entre otras.</li>
          <li><span>&#8226;</span>Negativa de afiliación por enfermedades preexistentes o imposición arbitraria de montos adicionales en la cuota.</li>
          <li><span>&#8226;</span>Solicitud de reafiliación luego de una baja legítima.</li>
          <li><span>&#8226;</span>Negativa de afiliación por parte de obras sociales por la condición de "monotributista".</li>
          <li><span>&#8226;</span>Negativa de mantener la afiliación a la obra social tras obtener la jubilación.</li>
        `,
    },
    {
      id: 5,
      title: "Derecho Laboral",
      image: `<img src="../assets/img/laboral.jpg" alt="Derecho Laboral">`,
      description: `
          <li><span>&#8226;</span>Despidos</li>
          <li><span>&#8226;</span>Trabajo clandestino</li>
          <li><span>&#8226;</span>Diferencias salariales y horas extras</li>
          <li><span>&#8226;</span>Accidentes de trabajo</li>
          <li><span>&#8226;</span>Enfermedades profesionales</li>
          <li><span>&#8226;</span>Trámites y reclamos ante la SRT</li>
          <li><span>&#8226;</span>Audiencias conciliatorias: SECLO</li>
        `,
    },
    {
      id: 6,
      title: "Accidentes de Tránsito y Laborales",
      image: `<img src="../assets/img/transito.jpg" alt="Accidentes de Tránsito y Laborales">`,
      description: `
          <li><span>&#8226;</span>Etapa extrajudicial</li>
          <li><span>&#8226;</span>Mediación</li>
          <li><span>&#8226;</span>Etapa Judicial</li>
          <li><span>&#8226;</span>Accidente laboral o in itinere</li>
          <li><span>&#8226;</span>ART</li>
          <li><span>&#8226;</span>Tratamiento Médico</li>
          <li><span>&#8226;</span>Alta y continuidad en el tratamiento</li>
          <li><span>&#8226;</span>Determinación de incapacidad</li>
          <li><span>&#8226;</span>Comisiones Médicas</li>
          <li><span>&#8226;</span>Reclamo Judicial</li>
        `
    },
    {
      id: 6,
      title: "Gestión de Visas y Ciudadanías",
      image: `<img src="../assets/img/pasaporte.png" alt="Accidentes de Tránsito y Laborales">`,
      description: `
          <li><span>&#8226;</span>Armado de carpetas</li>
          <li><span>&#8226;</span>Búsqueda de partidas</li>
          <li><span>&#8226;</span>Certificaciones</li>
          <li><span>&#8226;</span>Análisis de viabilidad</li>
          <li><span>&#8226;</span>Investigación genealógica</li>
        `
    }
  ];

  toggleCard(index: number) {
    this.flippedIndex = this.flippedIndex === index ? null : index;
  }
}
