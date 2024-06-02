import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarMsnComponent } from './snackbar-msn/snackbar-msn.component';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss'],
})
export class SnackbarComponent {
  constructor(private snackbar: MatSnackBar) {
    /*this.snackbar.open('Processo finalizado com sucesso!', 'Ok', {
      duration: 3000
    });*/
  }

  public openSnackBar() {
    const snackbar = this.snackbar.open(
      'Processo finalizado com sucesso!',
      'Ok',
    );

    snackbar.afterDismissed().subscribe((_) => {
      console.log('Dismissed');
    });

    snackbar.onAction().subscribe((_) => {
      console.log('After Action');
    });
  }

  public openFromComp() {
    this.snackbar.openFromComponent(SnackbarMsnComponent,
      {
        data: 'Processo finalizado com sucesso!',
        horizontalPosition: 'end',
        verticalPosition: 'top'
      }
    );
  }
}
