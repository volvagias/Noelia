import { Component } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

constructor(private clipboard: Clipboard) {}

linkCopy() {
  const copy = 'bruzzeseyasociados@gmail.com';

  this.clipboard.copy(copy);
}

}
