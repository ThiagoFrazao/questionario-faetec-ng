import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {take} from "rxjs/operators";
import {QuizQuestion, UserResponse} from "./interfaces/quiz.interfaces";

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private readonly BASE_URL: string = 'http://localhost:8080/api/questionario';

  constructor(private httpClient : HttpClient) { }

  public getQuestions(): Observable<QuizQuestion[]> {
      return this.httpClient.get<QuizQuestion[]>(`${this.BASE_URL}`).pipe(take(1));
  }

  public sendResponses(responses: UserResponse[]): Observable<any> {
    return this.httpClient.post<any>(`${this.BASE_URL}/responder`, responses).pipe(take(1));
  }

}
