import {Component, OnInit} from '@angular/core';
import {AppService} from "./app.service";
import {QuizError, QuizQuestion, UserResponse} from "./interfaces/quiz.interfaces";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {MatDialog} from "@angular/material/dialog";
import {ModalSucessoComponent} from "./modal/modal-sucesso/modal-sucesso.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  private _quizQuestions: QuizQuestion[] = [];

  private _form: FormGroup;

  public isApresentarForm: boolean = true;

  public isApresentarGrafico: boolean = false;

  private isQuizCached: boolean = false;

  constructor(
    private service: AppService,
    private formBuilder: FormBuilder,
    private modalSucesso: MatDialog) {
    this._form = this.formBuilder.group({ });
  }

  ngOnInit(): void {
    if(this.isQuizCached && this.service.possuiQuestionario()) {
      this.carregarQuestionario(this.service.getQuestionData());
    } else {
      this.service.getQuestions().subscribe((data: QuizQuestion[]): void => {
        this.carregarQuestionario(data);
        this.isQuizCached = true;
        this.service.setQuestionData(data);
      }, error => {
        if (this.service.possuiQuestionario()) {
          console.log("Falha ao recuperar questões do backend. Recuperando do cache.");
          this.carregarQuestionario(this.service.getQuestionData());
        } else {
          let quizError: QuizError = error as QuizError;
          if (quizError.message !== undefined) {
            alert("Falha ao carregar o questionário: " + quizError.message);
          } else {
            alert("Erro desconhecido ao carregar o questionário. Recarregue a página.");
          }
        }
      });
    }
  }

  get quizQuestions(): QuizQuestion[] {
    return this._quizQuestions;
  }

  get form(): FormGroup {
    return this._form;
  }

  public responderQuiz(): void {
    let responses: UserResponse[] = [];
    for (const questionName in this._form.getRawValue()) {
      responses.push({
        perguntaId: Number.parseInt(questionName),
        respostaId: Number.parseInt(this._form.getRawValue()[questionName])
      })
    }
    this.service.sendResponses(responses).subscribe(() => {
      this._form.reset();
      this.modalSucesso.open(ModalSucessoComponent, {
        disableClose: true
      });
    }, () => {
      this._form.reset();
      alert(`Falha ao responder o questionário. Recarregue a página.`);
    });
    this.modalSucesso.afterAllClosed.subscribe(() => {
      this.apresentarGrafico();
    });
  }

  public apresentarGrafico(): void {
    this.isApresentarGrafico = true;
    this.isApresentarForm = false;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  public apresentarForm(): void {
    this.isApresentarForm = true;
    this.isApresentarGrafico = false;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  private carregarQuestionario(questionData: QuizQuestion[]) {
    this._quizQuestions = questionData;
    this._quizQuestions.forEach((question: QuizQuestion) => {
      this._form.addControl(question.id.toString(), new FormControl('', Validators.required));
    });
  }
}
