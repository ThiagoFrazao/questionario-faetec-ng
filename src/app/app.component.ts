import {Component, OnInit} from '@angular/core';
import {AppService} from "./app.service";
import {QuizQuestion} from "./interfaces/quiz.interfaces";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  private _quizQuestions: QuizQuestion[] = [];

  private _form: FormGroup;


  constructor(private service: AppService, private formBuilder: FormBuilder) {
    this._form = this.formBuilder.group({

    });
  }

  ngOnInit(): void {
    this.service.getQuestions().subscribe((data: QuizQuestion[]): void => {
      this._quizQuestions = data;
      this._quizQuestions.forEach((question: QuizQuestion, index:number) => {
        this._form.addControl('question' + index, new FormControl('', Validators.required));
      });
    }, error => { alert(JSON.stringify(error))} );
  }

  get quizQuestions(): QuizQuestion[] {
    return this._quizQuestions;
  }

  get form(): FormGroup {
    return this._form;
  }

  public responderQuiz(): void {
    console.log(this._form.value);
  }

}
