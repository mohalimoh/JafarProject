import { Component, EventEmitter, Injectable, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { ControlValueAccessor, NG_VALIDATORS, NG_VALUE_ACCESSOR, Validator } from '@angular/forms';
import { NgbCalendar, NgbCalendarPersian, NgbDatepickerI18n, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

import { ToMiladi } from '../../util/date';
import { dateModel } from './jalali-date-picker.model';

const WEEKDAYS_SHORT = ['د', 'س', 'چ', 'پ', 'ج', 'ش', 'ی'];
const MONTHS = ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند'];

@Injectable()
export class NgbDatepickerI18nPersian extends NgbDatepickerI18n {
  getWeekdayShortName(weekday: number) { return WEEKDAYS_SHORT[weekday - 1]; }
  getMonthShortName(month: number) { return MONTHS[month - 1]; }
  getMonthFullName(month: number) { return MONTHS[month - 1]; }
  getDayAriaLabel(date: NgbDateStruct): string { return `${date.year}-${this.getMonthFullName(date.month)}-${date.day}`; }
}

@Component({
  selector: 'jalali-date-picker',
  templateUrl: './jalali-date-picker.component.html',
  providers: [
    { provide: NgbCalendar, useClass: NgbCalendarPersian },
    { provide: NgbDatepickerI18n, useClass: NgbDatepickerI18nPersian },
    { provide: NG_VALUE_ACCESSOR, useExisting: JalaliDatePickerComponent, multi: true },
    { provide: NG_VALIDATORS, useExisting: JalaliDatePickerComponent, multi: true }
  ],
  encapsulation: ViewEncapsulation.None
})
export class JalaliDatePickerComponent implements OnInit, ControlValueAccessor, Validator {

  private onChange: (value: dateModel) => void;
  @Input() selectedDate: dateModel;
  @Output() selectedDateChange = new EventEmitter<dateModel>();

  touched: boolean;
  required: boolean;
  mode = 'OPEN';
  ngOnInit() {
    this.selectToday();
  }
  writeValue(value: dateModel): void {
    //this.selectedDate = value;
    //console.log('selectedDate', value);
    //  let x = ToJalaliObject(this.selectedDate.garegorianDate);
    //  this.model = { year: x.year, month: x.month, day: x.day };
    //this.model = value;
  }
  registerOnChange(onChange: (value: dateModel) => void): void {
    this.onChange = onChange;
  }
  registerOnTouched(): void {
  }

  touch() {
    this.touched = true;
  }
  validate() {
    return null;
  }
  model: NgbDateStruct;

  date: { year: number, month: number };

  constructor(private calendar: NgbCalendar) {
    //console.log('Selected Date', this.selectedDate)
  }
  @Input('title') title = "title";
  selectToday() {
    this.model = this.calendar.getToday();
    this.onDateChange();
  }
  onDateChange() {
    let date: dateModel = { persianDate: this.getFaDate(), garegorianDate: this.getEnDate() };
    this.selectedDate = date;
    this.selectedDateChange.emit(this.selectedDate);
  }

  private getEnDate() {
    return ToMiladi(this.model.year, this.model.month, this.model.day)
  }

  private getFaDate() {
    return `${this.model.year}/${this.model.month}/${this.model.day} 00:00`;
  }
}

