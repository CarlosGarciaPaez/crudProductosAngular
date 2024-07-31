import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/Modelo/Producto';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  producto:Producto = new Producto();

  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit() {
  }

  modelProducto = new Producto();

  Guardar(producto:Producto){
    this.service.createProducto(producto)
    .subscribe(data=>{
      alert("CREÓ CORRECTAMENTE EL REGISTRO");
      this.router.navigate(["listar"]);
    })
  }

}
