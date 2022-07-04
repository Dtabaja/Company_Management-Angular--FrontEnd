import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Role } from 'src/app/interfaces/role';
import { RoleService } from 'src/app/services/role.service';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {
  roles:Role [] = []

  constructor(private roleService:RoleService,private router:Router) { }

  ngOnInit(): void {
    this.roleService.all().subscribe(
      roles => this.roles = roles
    );
  }

  delete(id:number):void{
    if(confirm("Are you sure you want to delete the user?")){
    this.roleService.delete(id).subscribe(
      () => this.roles = this.roles.filter(r => r.id !== id)
    );

  }
  }

}
