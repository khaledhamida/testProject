import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommandService } from '../services/command.service';
import { Command } from '../models/command';
import { FormBuilder, FormGroup,FormControl } from '@angular/forms';
import { Product } from '../models/product';
import { ProductService } from '../services/products.service';

@Component({
  selector: 'app-edit-command',
  templateUrl: './edit-command.component.html',
  styleUrls: ['./edit-command.component.css']
})
export class EditCommandComponent implements OnInit {

  id: string;
  command: Command;
  EditComamndForm:FormGroup;
  commandForm: FormGroup;
  allProduct: Product[];
  constructor(private fb: FormBuilder,
    private activateRoute: ActivatedRoute,
    private commandService: CommandService,
    private productService: ProductService,


    private router: Router) { }

  ngOnInit(): void {
    this.EditComamndForm = new FormGroup({
      date:new FormControl(this.command.date),
      Qntity: new FormControl(this.command.Qntity),
      name:new FormControl(this.command.product.name),
      
    });
    // get product by id
    this.id = this.activateRoute.snapshot.paramMap.get('id');
    this.commandService.getCommandById(this.id).subscribe(
      data => {
        console.log('This is my product', data);
        this.command = data;
      }
    )
   
  }
  // edit commande
  edit(p: any) {
    console.log(p);
   
    this.commandService.editCommand(this.command);
    console.log(this.command.amountLC);
    this.router.navigate(['/']);
  }
}
