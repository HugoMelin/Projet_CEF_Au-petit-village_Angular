import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtre',
  standalone: true
})
export class FiltrePipe implements PipeTransform {

  transform(items:any [], searchTerm:string):any[] {
    if (!searchTerm) {
      return items
    }
    searchTerm = searchTerm.toLowerCase()
    return items.filter(items => items.title.toLowerCase().includes(searchTerm))
  }

}