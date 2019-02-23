import { Component, OnInit } from '@angular/core';
import { Guser } from './guser';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-git-component',
  templateUrl: './git-component.component.html',
  styleUrls: ['./git-component.component.css']
})
export class GitComponentComponent implements OnInit {
  user: Guser;
  errormsg = '';
  url = 'https://api.github.com/users/';
  //url = 'https://blockchain.info/latestblock/';
  constructor(private _http: HttpClient) { }

  ngOnInit() {
  }
  getDetails(gval) {
  
    this._http.get(this.url + gval)
    //.subscribe(response => this.user = <Guser>response, error => this.errormsg = "Sorry ! Given user not found ")
    .toPromise()
    .then(response => this.user = <Guser>response, error => this.errormsg = "Sorry ! Given user not found ");
  }
}
