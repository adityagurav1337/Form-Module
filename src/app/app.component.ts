import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title(title: any) {
    throw new Error('Method not implemented.');
  }

formdata:any;



  ngOnInit(): void {
this.formdata = new FormGroup({
  email : new FormControl("",Validators.compose([Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[az]{2,4}$")])),
  password: new FormControl("", Validators.compose([Validators.required ]))
});
  }
  

  Submit(data:any){
    
if(data.username == "admin" && data.password == "admin" ){
  alert("welcome");
}    
else{
  alert("Invalid Username or password")
}

    
  }
}
