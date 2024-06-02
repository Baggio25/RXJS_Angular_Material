import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-dialog-msn',
  templateUrl: './dialog-msn.component.html',
  styleUrls: ['./dialog-msn.component.scss']
})
export class DialogMsnComponent {

  constructor(
    public matDialogRef: MatDialogRef<DialogMsnComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string
  ) {}

  public closeDialog(){
    this.matDialogRef.close('Retornado via result');
  }

}
