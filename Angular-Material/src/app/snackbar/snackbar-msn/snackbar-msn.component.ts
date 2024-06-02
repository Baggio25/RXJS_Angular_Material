import { Component, Inject } from '@angular/core';

import { MatSnackBarRef ,MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';
import { SnackbarComponent } from '../snackbar.component';

@Component({
  selector: 'app-snackbar-msn',
  templateUrl: './snackbar-msn.component.html',
  styleUrls: ['./snackbar-msn.component.scss'],
})
export class SnackbarMsnComponent {
  constructor(
    @Inject(MAT_SNACK_BAR_DATA) public data: string,
    public matSnackbarRef: MatSnackBarRef<SnackbarComponent>
  ) {}

  public closeSnackbar() {
    this.matSnackbarRef.dismiss();
  }
}
