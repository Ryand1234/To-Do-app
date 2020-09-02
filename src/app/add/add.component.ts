import { Component } from '@angular/core';
import gql from 'graphql-tag';
import { Apollo } from 'apollo-angular';
import { Router } from '@angular/router'

const ADD_TASK = gql`
mutation addtask($name: String, $status: Boolean, $time: String ){
  addtask(input:[{
    id: "hello"
    name:$name
    status:$status
    time:$time
  }]) {
    task{
      name
      status
      time
    }
  }
}`;

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {

  constructor(private apollo: Apollo,
  			private router: Router) { }

  task: string;
  status: boolean = false;
  date: string;

  add(){
  	this.apollo.mutate({
  		mutation: ADD_TASK,
  		variables: {
  			name: this.task,
  			status: false,
  			time: this.date
  		}
  	}).subscribe(({data})=>{
  		this.router.navigate(['/task']);
  	}, (err)=>{
  		alert("Task cannot be created!!!!");
  	})
  }

}
