import { Component } from '@angular/core';
import { ServerService } from './server.service';
import { Response } from '@angular/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  constructor(private serverService: ServerService){}

  servers:any[] = [];

  serverNameProp:string;
  capacityProp:number;
  arr:any[] = [];

  onGet(){
    this.serverService.getServers()
    .subscribe(
      (servers: any[]) => {
        this.servers = servers;
      },
      (error) => console.log(error)
    );
  }


  onSubmit(form: NgForm) {

      this.arr=[];
      this.arr.push(form.value);

      console.log(this.arr);

      this.serverService.storeServers(this.arr)
      .subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
      );

  }

    private generateId() {
      return Math.round(Math.random() * 10000);
  }

}
