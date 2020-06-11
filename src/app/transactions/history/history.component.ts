import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { History, FilterService } from "../../filter.service";

@Component({
  selector: "app-history",
  templateUrl: "./history.component.html",
  styleUrls: ["./history.component.css"]
})
export class HistoryComponent implements OnInit {
  // TODO: uncomment if api is not working
  //transactions$ = this.http.get("http://localhost:3000/api/data");
  public filterField;

  public filterResults$: Observable<History[]> = null;

  constructor(private http: HttpClient) {}

  ngOnInit() {}
  dataLength(data: History[]) {
    return data.length > 0 ? true : false;
  }
}
