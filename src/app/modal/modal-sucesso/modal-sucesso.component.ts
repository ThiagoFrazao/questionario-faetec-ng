import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-modal-sucesso',
  templateUrl: './modal-sucesso.component.html',
  styleUrls: ['./modal-sucesso.component.scss']
})
export class ModalSucessoComponent implements OnInit {

  private _msgModal: string;

  constructor(
    public _modalDialog: MatDialogRef<ModalSucessoComponent>) {
    this._msgModal = "Obrigado por participar! Questionário respondido com sucesso.";
  }

  ngOnInit(): void {
  }

  public fecharModal():void {
    this.modalDialog.close();
  }

  get msgModal(): string {
    return this._msgModal;
  }

  get modalDialog(): MatDialogRef<ModalSucessoComponent> {
    return this._modalDialog;
  }
}
