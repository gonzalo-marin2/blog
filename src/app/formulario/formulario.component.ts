import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BlogService, Post } from '../services/blog.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  formulario: FormGroup;
  /* nuevoPost: Post; */

  constructor(
    private blogService: BlogService
  ) {
    this.formulario = new FormGroup({
      titulo: new FormControl('', []),
      texto: new FormControl('', []),
      autor: new FormControl('', []),
      imagen: new FormControl('', []),
      fecha: new FormControl('', []),
      categoria: new FormControl('', [])
    });
  }

  ngOnInit(): void {
  }

  async onSubmit() {
    console.log('funciona');
    await this.blogService.agregarPost(this.formulario.value);
    this.formulario.reset();
  }

}
