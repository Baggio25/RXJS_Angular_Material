import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogMsnComponent } from './dialog-msn/dialog-msn.component';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {
  public message = '';

  constructor(private dialog: MatDialog) {}

  public openDialog() {
    const dialogRef = this.dialog.open(DialogMsnComponent, {
      data: 'Eita',
      enterAnimationDuration: '500ms',
      exitAnimationDuration: '500ms'
    });

    dialogRef.afterClosed().subscribe(result => {
      this.message = result !== undefined ? result : '';
    })
  }

}
