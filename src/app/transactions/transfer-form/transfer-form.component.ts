import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Transfer } from "../transfer";
import { AccountService } from "../../account.service";

@Component({
  selector: "app-transfer-form",
  templateUrl: "./transfer-form.component.html",
  styleUrls: ["./transfer-form.component.css"]
})
export class TransferFormComponent implements OnInit {
  transferForm: FormGroup;
  @Input() userAmountInput;
  @Input() fromAccountAmt;
  @Input() transfer: Transfer;
  @Input() accounts;
  @Input() merchants;
  @Output() transferSubmit = new EventEmitter();
  @Output() newTransfer: Object;

  constructor(private accountService: AccountService) {}
  ngOnInit() {
    const { from, to, amount } = this.transfer;

    this.transferForm = new FormGroup({
      from: new FormControl({ value: from, disabled: true }),
      to: new FormControl(to, [
        Validators.required,
        Validators.pattern(/^[a-z0-9]+$/)
      ]),
      amount: new FormControl(amount, [
        Validators.required,
        Validators.pattern(
          /^\$?([1-9]{1}[0-9]{0,2}(\,[0-9]{3})*(\.[0-9]{0,2})?|[1-9]{1}[0-9]{0,}(\.[0-9]{0,2})?|0(\.[0-9]{0,2})?|(\.[0-9]{1,2})?)$/
        )
      ])
    });
  }

  onSubmit() {
    if (this.transferForm.invalid) {
      return;
    }
    this.userAmountInput = parseInt(this.transferForm.value.amount);
    let dateSent = new Date().getTime();
    this.newTransfer = {
      amount: this.transferForm.value.amount,
      categoryCode: Math.random()
        .toString(36)
        .substring(7),
      merchant: this.transferForm.value.to,
      merchantLogo: "https://picsum.photos/40",
      transactionDate: dateSent,
      transactionType: "Online Transfer"
    };
    console.log(this.newTransfer);
    this.accountService.postTransfer(this.newTransfer);

    this.transfer = {
      from: `Now Checking(8979) - ${this.fromAccountAmt -
        this.userAmountInput}`,
      to: "",
      amount: ""
    };
    this.transferForm.reset(this.transfer);
  }
}
