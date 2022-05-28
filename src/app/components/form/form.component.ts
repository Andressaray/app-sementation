import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { TextService } from 'src/app/services/text.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  private subscription: Subscription = new Subscription();
  text = new FormControl('');
  bagWords: any = []
  listWords: any = []
  formText = new FormGroup({
    text: new FormControl('', Validators.required),
  });
  constructor(private textService: TextService,  private fb: FormBuilder){}

  ngOnInit(): void {
    this.formText = this.fb.group({
      text: ['', Validators.required],
    });
  }

  handlePress() {
    const text: string = this.textForm?.value
    this.subscription.add(
      this.textService.transformText(text).subscribe({
        next: (v) => {
          console.log('v', v)
          // @ts-ignore
          this.bagWords = v.body.bagWords
          // @ts-ignore
          this.listWords = v.body.listWords
        },
        error: (e) => console.error(e),
        complete: () => {
          console.log('Completo');
          
        }
      })
    );
  }
  get textForm() {
    return this.formText.get('text');
  }

}
