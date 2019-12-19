import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  breakpoint: number;
  actions: Array<any> = [
    {
      name: "Facturas",
      path: "/bills"
    },
    {
      name: "Presupuestos",
      path: "/"
    },
    {
      name: "Clientes",
      path: "/clients"
    },
    {
      name: "Productos",
      path: "/products"
    }
  ]
  constructor(public router: Router) {}

  ngOnInit() {
    this.breakpoint = window.innerWidth <= 768 ? 1 : 2;
  }

  onResize(event: any) {
    this.breakpoint = event.target.innerWidth <= 768 ? 1 : 2;
  }

}
