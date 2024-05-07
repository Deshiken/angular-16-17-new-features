import {Component, computed, effect, Signal, signal} from '@angular/core';

@Component({
  selector: 'app-signals',
  standalone: true,
  imports: [],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.scss'
})
export class SignalsComponent {
  cartAmount = signal(0);
  testSignal = signal(3);
  cartAmountWithTax: Signal<number> = computed(() => this.cartAmount() * 1.07)

  constructor() {
    // Effects can be used to execute code when a signal changes. For example keeping a value in sync with
    // local storage. Only the effect containing a signal that is changing will be executed. For example,
    // the third effect is never executed because the testSignal value never changes.
    effect(() => {
      console.log(`The cart amount is ${this.cartAmount()}`);
    })
    effect(() => {
      console.log(`The cart amount with tax is ${this.cartAmountWithTax()}`)
    })
    effect(() => {
      console.log(`The test signal value is ${this.testSignal()}`);
    })
  }

  // Signals can be changed using the set method
  public resetCartAmount() {
    this.cartAmount.set(0);
  }

  // Signals can be changed using update if you need access to the current value of the signal
  public incrementCartAmount() {
    this.cartAmount.update(value => value + 1)
  }
}
