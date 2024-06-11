import { Component,inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {FormControl, FormGroup} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-msg-template',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './msg-template.component.html',
  styleUrl: './msg-template.component.css'
})

export class MsgTemplateComponent {
  // 1. inject HttpClient
  private readonly httpClient = inject(HttpClient);

  msgContent  = new FormControl();

  updateName(){
    this.msgContent.setValue('Nancy');
    console.log("sendRequest")
    const res = this.httpClient.head('http://localhost:8643/messageTemplate/head');
    res.subscribe(e => console.log(e));

    const res1 = this.httpClient.post('http://localhost:8643/messageTemplate/',{templateContent:this.msgContent.value});
    res1.subscribe(e => console.log(e));
  }

  onSubmit(){
    console.warn(this.msgContent.value);
  }

  sendRequest(){

    console.log("sendRequest")
    const res = this.httpClient.get('http://localhost:8080/messageTemplate/head');
    res.subscribe(e => console.log(e));
  }
}
