import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-bannerimg',
  templateUrl: './bannerimg.component.html',
  styleUrls: ['./bannerimg.component.css']
})
export class BannerimgComponent implements OnInit {
banner:any;
  constructor(private datosPortfolio:PortfolioService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(datos=> {
      this.banner= datos;
    })
  }

}
