import { Component, OnInit, Input } from '@angular/core';
import { MenuItem } from 'primeng/api/menuitem';
import { CargasHisComponent } from '../componentes/cargas-his/cargas-his.component';

@Component({
  selector: 'app-menu-principal',
  templateUrl: './menu-principal.component.html',
  styleUrls: ['./menu-principal.component.css']
})
export class MenuPrincipalComponent implements OnInit {

  items: MenuItem[];
  @Input()
  punto_digitacion:string;
  @Input()
  ano:string;
  @Input()
  mes:string;

  constructor() { }

  ngOnInit() {

    this.items = [
      {
          label: 'Maestros', icon: 'fa fa-fw fa-check',
          items: [
              [
                  {
                      label: 'Personal',
                      items: [{label: 'TV 1.1'},{label: 'TV 1.2'}]
                  },
                  {
                      label: 'TV 2',
                      items: [{label: 'TV 2.1'},{label: 'TV 2.2'}]
                  }
              ],
              [
                  {
                      label: 'Puntos de digitacion',
                      items: [{label: 'Establecimientos por Puntos',routerLink:"adminpue"},{label: 'TV 3.2'}]
                  }
                 
              ]
          ]
      },
      {
          label: 'Reportes', icon: 'fa fa-fw fa-soccer-ball-o',
          items: [
              [
                  {
                      label: 'Estrategias',
                      items: [{label: 'Niño'},{label: 'Adolecente'},{label: 'Adulto'},{label: 'Adulto Mayor'},{label: 'Joven'},{label: 'Materno'}]
                  }

              ],
              [
                
              ],
              [
                  {
                      label: 'Digitador',
                      items: [{label: 'Sports 5.1'},{label: 'Sports 5.2'}]
                  },
                  {
                      label: 'Atenciones',
                      items: [{label: 'Sports 6.1'},{label: 'Sports 6.2'}]
                  }
              ]
          ]
      },
      {
        label: 'Cargas', icon: 'fa fa-fw fa-soccer-ball-o',
        items: [
            [
                {
                    label: 'HIS',
                    items: [{label: 'Periodo Actual',routerLink:"cargasHis/"+localStorage.getItem("pun")},{label: 'Actualizacion'},{label: 'Reporte de Cargas'}]
                }
            ],
            [
                {
                    label: 'SIS',
                    items: [{label: 'Periodo Actual',routerLink:"cargasSis/"+localStorage.getItem("pun")},{label: 'Actualizacion'},{label: 'Reporte de Cargas'}]
                }
            ]
        ]
    }
  ];
  }

}
