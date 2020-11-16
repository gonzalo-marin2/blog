
import { Component, OnInit } from '@angular/core';

import { BlogService, Post } from '../services/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  arrayPosts: Post[];

  categorias: string[];

  constructor(private blogService: BlogService) { }

  ngOnInit(): void {

    this.blogService.getAllPosts()
      .then(posts => {
        this.arrayPosts = posts;
      })
      .catch(error => console.log(error));

    this.blogService.getCategorias()
      .then(arrayCategorias => this.categorias = arrayCategorias);

  }

  async onChange($event) {
    if ($event.target.value === 'todos') {
      this.arrayPosts = await this.blogService.getAllPosts();
    } else {
      this.arrayPosts = await this.blogService.getPostsByCategoria($event.target.value);
    }
  }

  onClickBorrar(pIndice: number) {
    this.blogService.borrarPost(pIndice);
  }

}
