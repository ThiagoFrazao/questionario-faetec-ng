import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-grafico-resultado',
  templateUrl: './grafico-resultado.component.html',
  styleUrls: ['./grafico-resultado.component.scss']
})
export class GraficoResultadoComponent implements OnInit {

  @Output() retornarParaForm: EventEmitter<void> = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  view: [number, number] = [500, 300]; // Dimensions of the chart

  // Sample chart data
  chartData = [
    {
      name: 'Slice 1',
      value: 25
    },
    {
      name: 'Slice 2',
      value: 50
    },
    {
      name: 'Slice 3',
      value: 75
    }
  ];

  showLabels = true; // Show or hide labels
  showLegend = true; // Show or hide legend
  explodeSlices = false; // Explode slices
  doughnut = false; // Use a doughnut chart instead of a pie chart

  colorScheme: string = "nightLights";

  public voltar(): void {
    this.retornarParaForm.emit();
  }

}
