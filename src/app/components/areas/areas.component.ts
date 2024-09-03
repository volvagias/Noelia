import { Component } from '@angular/core';
import { title } from 'node:process';

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
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In quos laboriosam ratione animi, hic perferendis ex reprehenderit",
    },
    {
      id: 2,
      title: "Derecho de Familia",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In quos laboriosam ratione animi, hic perferendis ex reprehenderit",
    },
    {
      id: 3,
      title: "Derecho Previsional",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In quos laboriosam ratione animi, hic perferendis ex reprehenderit",
    },
    {
      id: 4,
      title: "Amparos de Salud",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In quos laboriosam ratione animi, hic perferendis ex reprehenderit",
    },
    {
      id: 5,
      title: "Derecho Laboral",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In quos laboriosam ratione animi, hic perferendis ex reprehenderit",
    },
    {
      id: 6,
      title: "Accidentes de Tránsito y Laborales",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In quos laboriosam ratione animi, hic perferendis ex reprehenderit",
    },
  ];

  toggleCard(index: number) {
    this.flippedIndex = this.flippedIndex === index ? null : index;
  }
}
