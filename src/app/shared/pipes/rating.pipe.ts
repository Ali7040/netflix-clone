import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rating',
  standalone: true,
})
export class RatingPipe implements PipeTransform {
  transform(value: number, decimalPlaces: number): string {
    if (isNaN(value)) {
      return '';
    }
    const roundedValue =
      Math.round(value * Math.pow(10, decimalPlaces)) /
      Math.pow(10, decimalPlaces);

    return roundedValue.toFixed(decimalPlaces);
  }
}
