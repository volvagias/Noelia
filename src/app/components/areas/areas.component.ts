import { Component } from '@angular/core';
import { title } from 'node:process';

@Component({
  selector: 'app-areas',
  templateUrl: './areas.component.html',
  styleUrl: './areas.component.css'
})
export class AreasComponent {

  areas = [
    {
      id: 1,
      title: "Derecho Administrativo 1",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In quos laboriosam ratione animi, hic perferendis ex reprehenderit",
    },
    {
      id: 2,
      title: "Derecho Administrativo 2",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In quos laboriosam ratione animi, hic perferendis ex reprehenderit",
    },
    {
      id: 3,
      title: "Derecho Administrativo 3",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In quos laboriosam ratione animi, hic perferendis ex reprehenderit",
    },
    {
      id: 4,
      title: "Derecho Administrativo 4",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In quos laboriosam ratione animi, hic perferendis ex reprehenderit",
    },
    {
      id: 5,
      title: "Derecho Administrativo 5",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In quos laboriosam ratione animi, hic perferendis ex reprehenderit",
    },
    {
      id: 6,
      title: "Derecho Administrativo 6",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In quos laboriosam ratione animi, hic perferendis ex reprehenderit",
    },

  ];
}
