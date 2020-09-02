import { Component, OnInit } from '@angular/core';
import gql from 'graphql-tag';

const ADD_TASK = gql`
mutation addtask{
  addtask(input:[{
    id: "hello"
    name:"Start Class"
    status:false
    time:"15-02-2020"
  }]) {
    task{
      id
      name
      status
    }
  }
}`;
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
