import { Component } from '@angular/core';
import { ServerService } from './server.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  constructor(private serverService: ServerService){}

  servers:any[] = [];
  appName = this.serverService.getAppName();


  onGet(){
    this.serverService.getServers()
    .subscribe(
      (servers: any[]) => {
        this.servers = servers;
        console.log(this.servers);
      },
      (error) => console.log(error)
    );
  }

  onAddServer(name: string) {
    this.servers.push({
      name: name,
      capacity: 50,
    });
    this.serverService.storeServers(this.servers.slice(-1)[0])
    .subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    );
  }
    private generateId() {
      return Math.round(Math.random() * 10000);
  }

}
