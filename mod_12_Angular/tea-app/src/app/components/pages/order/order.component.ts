import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {OrderService} from "../../../services/order.service";
import {Subscription, tap, timer} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit, OnDestroy {
  checkoutForm!: FormGroup;

  private subscriptionOrder: Subscription | null = null;
  btnDisabled: boolean = false;
  showError: boolean = false;

  constructor(private OrderService: OrderService, private fb: FormBuilder, private router: Router) {
  }

  ngOnInit(): void {
    this.checkoutForm = this.fb.group({
      product: [{value: this.OrderService?.product ?? 'Товар не выбран', disabled: true}],
      firstName: ['', [Validators.required, Validators.pattern(/^[A-Za-zА-Яа-яЁё]+$/)]],
      lastName: ['', [Validators.required, Validators.pattern(/^[A-Za-zА-Яа-яЁё]+$/)]],
      phone: ['', [Validators.required, Validators.pattern(/^\+?\d{11}$/)]],
      country: ['', [Validators.required]],
      zip: ['', [Validators.required]],
      address: ['', [Validators.required, Validators.pattern(/^[A-Za-zА-Яа-я0-9\s\-\/]+$/)]],
      comments: ['']
    });
  }

  ngOnDestroy(): void {
    this.subscriptionOrder?.unsubscribe();
  }

  public sendOrder(): void {
    if (this.checkoutForm.invalid) {
      this.checkoutForm.markAllAsTouched(); // Подсветить ошибки
      return;
    }

    // считываем данные формы
    const formData = this.checkoutForm.getRawValue();

    // приводим данные формы к требуемому виду
    const formattedData = {
      name: formData.firstName,
      last_name: formData.lastName,
      phone: formData.phone,
      country: formData.country,
      zip: formData.zip,
      product: formData.product,
      address: formData.address,
      comments: formData.comments,
    };

    this.btnDisabled = true;

    this.subscriptionOrder = this.OrderService.createOrder(formattedData)
      .pipe(
        tap(() => {
          this.btnDisabled = false;
        })
      )
      .subscribe({
        next: (res) => {
      if (res.success && !res.message) {
        this.checkoutForm.reset();
        document.getElementById('orderForm')!.style.display = 'none';
        document.getElementById('orderOk')!.style.display = 'flex';
        setTimeout(() => {
          this.router.navigate(['/']).then(() => {
            window.scrollTo(0, 0);
          });
        }, 5000); // Перенаправление через 5 секунд
      } else {
        this.showError = true;
        timer(3000).subscribe(() => this.showError = false);
        console.log('Error: ' + res.message);
      }
    },
        error: (err) => {
          console.log(err);
          this.router.navigate(['/catalog']);
        }
  })
  }
}
