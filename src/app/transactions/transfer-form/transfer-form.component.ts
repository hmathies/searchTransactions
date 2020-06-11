import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Transfer } from "../transfer";
@Component({
  selector: "app-transfer-form",
  templateUrl: "./transfer-form.component.html",
  styleUrls: ["./transfer-form.component.css"]
})
export class TransferFormComponent implements OnInit {
  transferForm: FormGroup;
  @Input() transfer: Transfer;
  @Input() accounts;
  @Input() merchants;
  @Output() transferSubmit = new EventEmitter();

  constructor() {}

  ngOnInit() {
    const { from, to, amount } = this.transfer;

    this.transferForm = new FormGroup({
      from: new FormControl(""),
      to: new FormControl(""),
      amount: new FormControl(""
      )
    });
  }
  onSubmit() {
    if (this.transferForm.invalid) {
      return;
    }
    this.transferSubmit.emit(this.transferForm.value);
    console.log("clicked")
  }
}
