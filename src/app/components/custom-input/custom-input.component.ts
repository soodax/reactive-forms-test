import { Component, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.scss'],
  providers: [
    {
      //Используем токен, чтобы Ангуляр видел наш кастомный инпут
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomInputComponent),
      multi: true
    }
  ]
})
//Импортируем и используем интерфейс ControlValueAccessor
export class CustomInputComponent implements ControlValueAccessor {

  constructor() {}

  //Поле для хранения значения
  value: string

  //Поле для хранения функции из registerOnChange
  onChange: (value: string) => void

  //Поле для хранения функции из registerOnTouched
  onTouched!: () => void

  //Метод срабатывающий при изменении инпута
  onValueChange(event: Event) {
    //Получаем сам элемент
    const elem = event.target as HTMLInputElement
    //Получаем значение из элемента
    const value = elem.value

    //Закидываем значение в onChange
    this.onChange(value)
  }

  writeValue(obj: any): void {
    this.value = obj
  }

  //Метод для записи колбека в onChange
  registerOnChange(fn: any): void {
     //Зыписываем функцию как колбек
    this.onChange = fn
  }

  //Метод для записи колбека в onTouched
  registerOnTouched(fn: any): void {
    //Зыписываем функцию как колбек
    this.onTouched = fn
  }

}
