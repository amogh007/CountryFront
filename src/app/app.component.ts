import { Component, OnInit } from '@angular/core';
import {UserDataService} from './services/user-data.service'
import {ChangeDetectorRef} from '@angular/core'
import {CountryService} from './services/country.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'pr';
  li:any;
  lis=[];
  users:any;
  countries:any;


  isChecked:any;
  isCheckedName:any;
 //----------------------------------------------------------------
 
  checkboxData = ["Pakistan","Australia","China"];
  
  
  constructor(private userData:UserDataService,private countryData:CountryService,private ref:ChangeDetectorRef) {
    
    userData.users().subscribe((data)=>{
      console.warn('data',data);
     this.users=data
    });
    countryData.countries().subscribe((data)=>{
      console.warn('data',data);
     this.countries=data
     
    });
  }
  ngOnInit(){
    this.userData.users().subscribe((data)=>{
      console.warn('data',data);
     this.users=data
    });
    this.ref.detectChanges();
  }
    item:String[]=[];
    ex(ar:String[],nm:any){
     let eb=true;
        ar.forEach((item:any,indez:number)=>{
            if(item==nm){
              ar.splice(indez,1);
              eb=false;
            }
        });
        if(eb){
          ar.push(nm)
        }
    }
  
  onChange(e:any){       
    this.isChecked = !this.isChecked;
    this.isCheckedName = e.target.name;
    this.ex(this.item,e.target.name);
    
    this.userData.setUrl(e.target.value)
   
    this.userData.users().subscribe((data)=>{
      console.warn('data',data);
     this.users=data
    });
    
    this.ref.detectChanges();
  }
 
//------------------------------------------------------------------








 
}
