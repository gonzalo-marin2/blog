import { Injectable } from '@angular/core';

export interface Post {
    titulo: string;
    texto: string;
    autor: string;
    imagen: string;
    fecha: Date;
    categoria: string;
}

@Injectable({
    providedIn: 'root'
})

export class BlogService {

    private arrPosts: Post[];

    /* private nuevoPost: Post[]; */

    constructor() {
        this.arrPosts = [
            {
                titulo: 'Mis bonsais', texto: 'Lorem ipsum', autor: 'Felipe González',
                imagen: './assets/images/cometa.png',
                fecha: new Date('5/11/20'), categoria: 'Ocio'
            },
            {
                titulo: 'Cómo hacer 1000 abdominales', texto: 'Lorem ipsum', autor: 'Jose María Aznar',
                imagen: './assets/images/corazon.png',
                fecha: new Date('5/11/20'), categoria: 'Salud y bienestar'
            },
            {
                titulo: 'Cómo llegar a ser presidente siendo gilipollas', texto: 'Lorem ipsum', autor: 'Jose Luis Rodríguez Zapatero',
                imagen: './assets/images/meditacion.png',
                fecha: new Date('5/11/20'), categoria: 'Autoayuda'
            }
        ]

        /* this.nuevoPost = []; */
    }

    getAllPosts(): Promise<Post[]> {
        return new Promise((resolve, reject) => {
            resolve(this.arrPosts);
        });
    }

    getPostsByCategoria(pCategoria: string): Promise<Post[]> {
        return new Promise((resolve, reject) => {
            const arrFiltrado = this.arrPosts.filter(post => {
                return post.categoria === pCategoria;
            });
            resolve(arrFiltrado);
        });
    }

    getCategorias(): Promise<string[]> {
        return new Promise((resolve, reject) => {
            const categorias = [];
            for (let post of this.arrPosts) {
                if (!categorias.includes(post.categoria)) {
                    categorias.push(post.categoria);
                }
            }
            resolve(categorias);
        });
    }

    agregarPost(pPost: Post): Promise<string> {
        return new Promise((resolve, reject) => {
            /* this.nuevoPost.push(pPost);
            console.log(this.nuevoPost); */
            this.arrPosts.push(pPost);
            console.log(this.arrPosts);
            resolve('Nuevo post añadido al blog');
        });

    }

}