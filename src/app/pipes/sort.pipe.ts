import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  standalone: true
})
export class SortPipe implements PipeTransform {

  transform(items:any[], sort:string="non"):any[] {
    if (sort === "descending") {
      return items.sort((a, b) => {
        if (a.prix>b.prix) {
          return -1
        } else if (a.prix<b.prix){
          return 1
        } else {
          return 0 
        }
      })
    } else if (sort === "ascending") {
      return items.sort((a, b) => {
        if (a.prix<b.prix) {
          return -1
        } else if (a.prix>b.prix){
          return 1
        } else {
          return 0 
        }
      })
    } else {
      return items
    }
  }  
}
