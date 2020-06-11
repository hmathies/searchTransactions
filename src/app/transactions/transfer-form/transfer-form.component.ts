import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Transfer } from "../transfer";
import { AccountService } from "../../account.service";
import { $ } from 'protractor';

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
  fromAccount: string = 'Now Checking(8979) '
  fromAccountAmt: number = 10000
  constructor(private accountService: AccountService) {}

  ngOnInit() {
    const { from, to, amount } = this.transfer;


    this.transferForm = new FormGroup({
      from: new FormControl({value: `${this.fromAccount} ${this.fromAccountAmt}`, disabled: true}),
      to: new FormControl(""),
      amount: new FormControl(""
      )
    });
  }
  onSubmit() {
    if (this.transferForm.invalid) {
      return;
    }
    let dateSent = new Date();
    let newTransfer: Object = {
      amount: this.transferForm.value.amount,
      categoryCode: '',
      merchant: this.transferForm.value.to,
      merchantLogo: '',
      transactionDate: dateSent,
      transactionType: "Online Transfer"
    }
    this.transferSubmit.emit(this.transferForm.value);
    this.accountService.postTransfer(newTransfer);
    console.log(this.transferForm.value);
    console.log(newTransfer)
    this.transferForm.reset();

  }
}
