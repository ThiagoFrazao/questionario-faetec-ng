import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {GraphData} from "../interfaces/quiz.interfaces";
import {AppService} from "../app.service";

@Component({
  selector: 'app-grafico-resultado',
  templateUrl: './grafico-resultado.component.html',
  styleUrls: ['./grafico-resultado.component.scss']
})
export class GraficoResultadoComponent implements OnInit {

  @Output() retornarParaForm: EventEmitter<void> = new EventEmitter<void>();

  private _graphData: GraphData[] = [];

  constructor(private service: AppService) { }

  ngOnInit(): void {
    this.service.getResults().subscribe((response: GraphData[]) => {
      this._graphData = response;
      this.service.setLastGraphData(response);
    }, () => {
      if (this.service.possuiGraphData()) {
        alert("Não foi possível recuperar os novos dados dos gráficos no momento. Apresentaremos os resultados da ultima pesquisa.");
        this._graphData = this.service.getLastGraphData();
      } else {
        alert("Não foi possível recuperar os dados dos gráficos. Por favor, recarregue a página.");
      }
    });
  }


  get graphData(): GraphData[] {
    return this._graphData;
  }

  view: [number, number] = [600, 400]; // Dimensions of the chart
  showLabels = true; // Show or hide labels
  showLegend = true; // Show or hide legend
  explodeSlices = false; // Explode slices
  doughnut = false; // Use a doughnut chart instead of a pie chart
  colorScheme: string = "nightLights";

  public voltar(): void {
    this._graphData = [];
    this.retornarParaForm.emit();
  }

  protected readonly JSON = JSON;

  getJson(graphInfo: GraphData) {
    return JSON.stringify(graphInfo);
  }
}

