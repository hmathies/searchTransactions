import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { AccountService } from "../../account.service";
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  // lists = [];
  // transactions$ = this.http.get("http://localhost:3000/api/data");

  constructor(private accountService: AccountService) {}

  ngOnInit() {}
  // onTerm(term: string){
  //   this.accountService.search
  // }
}
