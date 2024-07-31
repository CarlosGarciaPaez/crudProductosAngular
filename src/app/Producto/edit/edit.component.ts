import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/Modelo/Producto';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(private router:Router, private service:ServiceService) { }


  ngOnInit() {
    this.Editar();
  }

  modelProducto:Producto = new Producto();

  Editar(){
    let id = localStorage.getItem("id");
    this.service.getProductoById(+id).subscribe(
      data=>{
        this.modelProducto  = data;
    })
  }

  Actualizar(producto:Producto){
    this.service.updateProducto(producto)
    .subscribe(
      data=>{
        this.modelProducto = data;
        alert("MODIFICÓ CORRECTAMENTE EL REGISTRO");
        this.router.navigate(["listar"]);
      }
    )
  }

}
