import { Component, OnInit, OnChanges, Input, AfterContentChecked} from '@angular/core';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile implements OnInit, OnChanges, AfterContentChecked {

  @Input() pName : String = '';

  ngOnInit(){
    console.log(':: ngOnInit profile component triggered::');
  }

  ngOnChanges(){
    console.log(':: ngOnChanges profile component triggered::');
  }

  ngAfterContentChecked(){
    console.log(':: ngAfterContentChecked profile component triggered::');
  }

}
