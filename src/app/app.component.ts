import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public tarefa: string;
  public tarefas: any [] = [];
  setTarefas() {
    this.tarefas.push(this.tarefa);
    this.reiniciaInput();
  }
  delTarefa(tarefa) {
    for (let i = 0; i <= this.tarefas.length; i++) {
      if (this.tarefas[i] === tarefa) {
        this.tarefas.splice(i, 1);
      }
    }
  }
  reiniciaInput() {
    this.tarefa = '';
  }
}
