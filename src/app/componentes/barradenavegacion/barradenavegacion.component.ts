import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-barradenavegacion',
  templateUrl: './barradenavegacion.component.html',
  styleUrls: ['./barradenavegacion.component.css']
})
export class BarradenavegacionComponent implements OnInit {
miPortfolio:any;
  constructor(private datosPortfolio: PortfolioService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data => {
      console.log(data);
      this.miPortfolio= data;
    });
  }

}
