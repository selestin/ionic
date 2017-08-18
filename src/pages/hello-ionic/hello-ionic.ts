import { Component } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {PeopleService} from '../../providers/people-service';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html',
  providers: [PeopleService]
})
export class HelloIonicPage {
  transferDate : any;
  vehicle_no : any;
  posts: any;
  people: any;
   constructor(public http: Http,public peopleService: PeopleService) {

	this.transferDate = '';
	this.vehicle_no ='KL-AK-07-6670';   
	
	/* this.http.get('https://www.reddit.com/r/gifs/new/.json?limit=10').map(res => res.json()).subscribe(data => {
        this.posts = data.data.children;
	console.log(this.posts); 

    }); */
 
	this.loadPeople();


 }
	search_vehicle() {
		alert('test');
			this.http.get('http://localhost/ionicweb/result.php?action=save&date='+this.transferDate+'&vehicle_no='+this.vehicle_no).map(res => res.json()).subscribe(data => {
     
				console.log(data);

   			});

	}

	loadPeople(){
  		this.peopleService.load()
 		 .then(data => {
   			 this.people = data;
   			 console.log(this.people);
 		 });
	}

}
