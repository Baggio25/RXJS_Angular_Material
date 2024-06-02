import { Component } from '@angular/core';
import { Platform } from '@angular/cdk/platform';

import * as moment from 'moment';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss']
})
export class DatepickerComponent {
  public startDate = moment([2024, 4, 30])
  public minDate = moment([2024, 3, 30]);
  public maxDate = moment([2024, 10, 30]);

  constructor(private platform: Platform) {

  }

  get isTouchDevice() {
    return this.platform.ANDROID || this.platform.IOS;
  }

}

