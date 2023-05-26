import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import {take} from "rxjs/operators";
import {GraphData, QuizQuestion, UserResponse} from "./interfaces/quiz.interfaces";

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private readonly BASE_URL: string = 'http://localhost:8080/api/questionario';

  private _lastGraphData: BehaviorSubject<GraphData[]> = new BehaviorSubject<GraphData[]>([]);

  public questionData: BehaviorSubject<QuizQuestion[]> = new BehaviorSubject<QuizQuestion[]>([]);

  public setLastGraphData(data: GraphData[]): void {
    this._lastGraphData.next(data);
  }

  public getLastGraphData(): GraphData[] {
    return this._lastGraphData.getValue();
  }

  public possuiGraphData(): boolean {
    return this._lastGraphData.getValue() !== [];
  }

  public setQuestionData(data: QuizQuestion[]): void {
    this.questionData.next(data);
  }

  public getQuestionData(): QuizQuestion[] {
    return this.questionData.getValue();
  }

  public possuiQuestionario(): boolean {
    return this.questionData.getValue() !== [];
  }

  constructor(private httpClient : HttpClient) { }

  public getQuestions(): Observable<QuizQuestion[]> {
      return this.httpClient.get<QuizQuestion[]>(`${this.BASE_URL}`).pipe(take(1));
  }

  public sendResponses(responses: UserResponse[]): Observable<any> {
    return this.httpClient.post<any>(`${this.BASE_URL}/responder`, responses).pipe(take(1));
  }

  public getResults(): Observable<GraphData[]> {
    return this.httpClient.get<GraphData[]>(`${this.BASE_URL}/graficos`).pipe(take(1));
  }

}
