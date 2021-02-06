import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { User } from '../../shared/models/user';

@Component({
  selector: 'stream-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  user: User = {} as any;
  // FormGroup, FormControl, FormArray
  // userForm: FormGroup = new FormGroup({
  //   name: new FormControl('', [Validators.required, Validators.minLength(3)]),
  //   role: new FormControl('Client', [Validators.required, Validators.minLength(3)]),
  //   dob: new FormControl(undefined, [this.validateDOB]),
  //   username: new FormControl('', [Validators.required, Validators.minLength(3)]),
  //   password: new FormControl('', [Validators.required, Validators.minLength(3)]),
  //   address: new FormGroup({
  //     city: new FormControl(),
  //     state: new FormControl(),
  //     country: new FormControl()
  //   }),
  //   mobiles: new FormArray([new FormControl('', [Validators.required, Validators.minLength(10)])])
  // })
  userForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    role: ['Client', [Validators.required, Validators.minLength(3)]],
    dob: [undefined, [this.validateDOB]],
    username: ['', [Validators.required, Validators.minLength(3)]],
    password: ['', [Validators.required, Validators.minLength(3)]],
    address: this.fb.group({
      city: [],
      state: [],
      country: []
    }),
    mobiles: this.fb.array([this.fb.control('', [Validators.required, Validators.minLength(10)])])
  })

  confirmPassword: string;
  constructor(private fb: FormBuilder) {
    this.userForm.get('username').valueChanges.subscribe((v) => {
      console.log(v);
    })
  }

  get mobiles() {
    return this.userForm.get('mobiles') as FormArray;
  }

  addNumber() {
    this.mobiles.push(new FormControl('', [Validators.required, Validators.minLength(10)]));
  }
  removeNumber(index: number) {
    this.mobiles.removeAt(index);
  }
  ngOnInit(): void {
  }

  validateDOB(control: AbstractControl): ValidationErrors | null {
    if (new Date(control.value) > new Date()) {
      return {
        date: "Invalid date"
      };
    }
    return null;
  }
  submit() {
    // if (this.user.password !== this.confirmPassword) {
    //   alert("Passwords don't match");
    // } else if (this.user.password) {

    // }
  }
}
