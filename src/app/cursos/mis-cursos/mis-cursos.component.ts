import { Component, OnInit } from '@angular/core';
import { InterfazCurso } from '../interfaces/interfaz-curso';
import { CursosService } from '../servicios/cursos.service';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-mis-cursos',
  standalone: true,
  imports: [TableModule],
  templateUrl: './mis-cursos.component.html',
  styleUrl: './mis-cursos.component.scss'
})
export class MisCursosComponent implements OnInit{
  
  misCursos: InterfazCurso[] = [];

  constructor(private servicio:CursosService){}

  ngOnInit(){
    this.servicio.obtenerCurso().subscribe(data => {
      this.misCursos = data;
      if(this.misCursos.length <= 0){
        alert('Noy hay cursos para ver.')
      }
    })

  }
}
