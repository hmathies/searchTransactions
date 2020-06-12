import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: History[], searchTerm: string): any[] {
    if (!items) return [];
    if (!searchTerm) return items;
  
    return items.filter(item => {
      return Object.keys(item).some(key => {
        return String(item[key]).toLowerCase().includes(searchTerm.toLowerCase());
      });
    });
   }
}

