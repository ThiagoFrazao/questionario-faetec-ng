import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {take} from "rxjs/operators";
import {QuizQuestion} from "./interfaces/quiz.interfaces";

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private readonly BASE_URL: string = 'http://localhost:8080/api';

  constructor(private httpClient : HttpClient) { }

public getQuestions(): Observable<QuizQuestion[]> {
    return this.httpClient.get<QuizQuestion[]>(`${this.BASE_URL}/questionario`).pipe(take(1));
}


}
