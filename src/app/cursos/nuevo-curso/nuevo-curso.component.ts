import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CursosService } from '../servicios/cursos.service';

@Component({
  selector: 'app-nuevo-curso',
  standalone: true,
  imports: [ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './nuevo-curso.component.html',
  styleUrl: './nuevo-curso.component.scss'
})
export class NuevoCursoComponent {

  formulario:FormGroup;

  constructor(private fb:FormBuilder,private servicio:CursosService){
    this.formulario = this.fb.group({
      'id':['',Validators.required],
      'nombre':['',Validators.required],
      'url':['',Validators.required],
      'imagen':['',Validators.required],
      'cantHoras':['',Validators.required],
      'precio':['',Validators.required],
      'categoria':['',Validators.required],
    })
  }

  guardarCurso():void {
    if(this.formulario.valid){
      this.servicio.agregarCurso(this.formulario.value).subscribe(() => {
        alert('El curso se agrego correctamente.');
        this.formulario.reset();
      })
    }else{
      alert('Revisar los campos.')
    }
  }
}

