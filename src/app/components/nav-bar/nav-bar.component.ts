import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit{
  constructor(private router: Router, private location: Location, private auth: AuthService){};

  public btnLabel:string = '';
  public activeUser: any;

  ngOnInit(): void {
    this.btnLabel = "Quien Soy";
    this.auth.obtenerUser().subscribe((user => {
      this.activeUser = user?.email;
      if(this.activeUser == undefined)
      {
        this.router.navigateByUrl("/login");
      }
    }));
  };

  public btnClick()
  {
    if (this.location.path(true) == '/about-us')
    {
      this.btnLabel = "Quien Soy";
      this.location.back();
    }
    else
    {
      this.btnLabel = "Volver";
      this.router.navigateByUrl("/about-us");
    }
  }

  logOut()
  {
    this.auth.logOut();
  }

}
