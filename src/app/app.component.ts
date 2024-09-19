import {Component, OnInit, signal, WritableSignal} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {HlmButtonDirective} from "@spartan-ng/ui-button-helm";
import {
  HlmCardContentDirective,
  HlmCardDirective,
  HlmCardHeaderDirective,
  HlmCardImports
} from "@spartan-ng/ui-card-helm";
import {HlmInputDirective} from "@spartan-ng/ui-input-helm";
import {HlmLabelDirective} from "@spartan-ng/ui-label-helm";
import {HlmIconComponent} from "@spartan-ng/ui-icon-helm";
import {provideIcons} from "@ng-icons/core";
import {lucideLink2, lucideMapPin} from "@ng-icons/lucide";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {TitleCasePipe} from "./component/pipe/title-case.pipe";
import {LowerCasePipe, UpperCasePipe} from "@angular/common";
import * as htmlToImage from 'html-to-image';
import download from 'downloadjs';

@Component({
  selector: 'app-root',
  standalone: true,
  providers: [provideIcons({lucideMapPin, lucideLink2})],

  imports: [RouterOutlet, HlmButtonDirective, HlmButtonDirective, HlmCardDirective, HlmInputDirective, HlmLabelDirective, HlmCardContentDirective, HlmCardHeaderDirective, HlmCardHeaderDirective, HlmButtonDirective, HlmIconComponent, HlmIconComponent, HlmIconComponent, HlmIconComponent, HlmCardImports, HlmIconComponent, HlmIconComponent, HlmIconComponent, HlmIconComponent, HlmIconComponent, HlmIconComponent, HlmIconComponent, ReactiveFormsModule, TitleCasePipe, UpperCasePipe, LowerCasePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  name: WritableSignal<string> = signal('');


  title = 'signatureGen';
  email: WritableSignal<string> = signal('');
  phone: WritableSignal<string> = signal('');
  titles: WritableSignal<string> = signal('');
  form: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
    titles: new FormControl('', Validators.required)
  })
  protected readonly lucideMapPin = lucideMapPin;
  protected readonly lucideLink2 = lucideLink2;

  ngOnInit(): void {

    this.form.valueChanges.subscribe(changes => {
      this.name.update(value => changes.name);
      this.email.update(value => changes.email);
      this.phone.update(value => changes.phone);
      this.titles.update(value => changes.titles);
      console.log(changes);
    })
  }

  generateImage() {
    var node: any = document.getElementById('image-section');
    htmlToImage.toPng(node)
      .then((dataUrl) => {
        var img = new Image();
        img.src = dataUrl;
        download(dataUrl, `signature-${this.name()}.png`);
      })
      .catch(function (error) {
        console.error('oops, something went wrong!', error);
      });
  }
}
