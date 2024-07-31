import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../Modelo/Producto';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  Url = "http://localhost:7575/producto"

  getProductos(){
    return this.http.get<Producto[]>(this.Url + "/listar");
  }

  createProducto(producto:Producto){
    return this.http.post<Producto[]>(this.Url, producto);
  }

  getProductoById(id:number){
    return this.http.get<Producto>(this.Url  + "/" + id);
  }

  updateProducto(producto:Producto){
    return this.http.put<Producto>(this.Url + "/" + producto.id, producto);
  }

  deleteProducto(producto:Producto){
    return this.http.delete<Producto>(this.Url + "/" + producto.id);
  }



}
