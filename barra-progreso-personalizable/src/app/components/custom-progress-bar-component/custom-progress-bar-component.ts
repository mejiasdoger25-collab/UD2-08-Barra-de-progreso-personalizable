import { Component, computed, input, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-custom-progress-bar-component',
  styleUrl: './custom-progress-bar-component.css',
  templateUrl: './custom-progress-bar-component.html',
})
export class CustomProgressBarComponent {
//lista de variables para ambos elementos del custom-bar

  valor = signal(0);
  color = signal('');

  barValor = signal(0);
  barColor = signal('bg-primary');

  //para leer los inputs
  label = computed(() => `The slider's value is ${this.valor()}`);
  label2 = computed(() => `The slider's value is ${this.color()}`);

  updateBar(){
    //no hacer por conosole, sino reactivo con el html bar
    const n = Number(this.valor());
    this.barValor.set(Math.min(100, Math.max(0, isNaN(n) ? 0 : n)));

    const colores: Record<string, string> = {
      Rojo: 'bg-danger',
      Verde: 'bg-success',
      Amarillo: 'bg-warning',
    };
    this.barColor.set(colores[this.color()] ?? 'bg-primary');
  }
}
