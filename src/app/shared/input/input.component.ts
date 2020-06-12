import { Component, OnInit, Input, Output } from "@angular/core";
import { FormControl } from "@angular/forms";

@Component({
  selector: "app-input",
  templateUrl: "./input.component.html",
  styleUrls: ["./input.component.css"]
})
export class InputComponent implements OnInit {
  @Input() label: string;
  @Input() control: FormControl;
  @Input() inputType: string;
  /* Below Input decorators where for capturing the api data to populate the select/dropdowns from my inital design */
  // @Input() accounts: [];
  // @Input() merchants: [];
  @Input() controlType = "input";
  
  constructor() {}

  ngOnInit() {}

  // Handeling form validation
  showErrors() {
    const { dirty, touched, errors } = this.control;
    return dirty && touched && errors;
  }
}
