import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {

  constructor(private datosPortfolio:PortfolioService) { }
  lista:any;
  ngOnInit(): void {
  this.datosPortfolio.obtenerDatos().subscribe(data =>{
  this.lista = data.habilidades;
  });
  }

}
