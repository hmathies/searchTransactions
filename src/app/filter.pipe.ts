import { Pipe, PipeTransform } from "@angular/core";
import { History, FilterService } from "./filter.service";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Pipe({
  name: "filter"
})
export class FilterPipe implements PipeTransform {
  constructor(private filterService: FilterService) {}

  transform(value: string, filterTerm: string): Observable<History[]> {
    return this.filterService.filterHistory(filterTerm);
  }
}
