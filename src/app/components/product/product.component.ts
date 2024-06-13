import {Component, EventEmitter, Input, Output} from '@angular/core';
import { Product } from '../../../types';
import { RatingModule } from 'primeng/rating';
import {FormsModule} from "@angular/forms";
import {ConfirmPopupModule} from "primeng/confirmpopup";
import {ToastModule} from "primeng/toast";
import {ConfirmationService} from "primeng/api";
import {ButtonModule} from "primeng/button";

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [
    RatingModule,
    FormsModule,
    ButtonModule,
    ConfirmPopupModule,
    ToastModule
  ],
  providers: [ConfirmationService],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
  constructor(private confirmationService: ConfirmationService) {}
  @Input() product!: Product;
  @Output() edit: EventEmitter<Product> = new EventEmitter<Product>();
  @Output() delete: EventEmitter<Product> = new EventEmitter<Product>();

  editProduct() {
    this.edit.emit(this.product);
  }


  ngOnInIt() {
    // this.productOutput.emit(this.product);
  }

  deleteProduct() {
    this.delete.emit(this.product);
  }
}
