import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'RXJS';
  ngOnInit(): void {
     // metodo minhaPromisse
    // this.minhaPromisse('Eduardo').then( result => console.log(result));

    // this.minhaPromisse('jose')
    //   .then( result => console.log(result))
    //   .catch(err => console.log(err));


 // metodo minhaObservable
    // this.minhaObservable('Eduardo')
    //   .subscribe(
    //       result => console.log(result),
    //       erro => console.log(erro),
    // () => console.log('FIM!');
    //       );

    const observer = {
            next: valor => console.log('next: ', valor),
            error: erro => console.log('Erro: ', erro),
            complete: () => console.log('Fim!')
          };

    // metodo minhaObservable
    // const obs = this.minhaObservable('Eduardo');
    // obs.subscribe(observer);

    // metodo usuarioObservable
    const obs = this.usuarioObservable('Admin', 'admin@gmail.com');
    const subs = obs.subscribe(observer);

    setTimeout(() => {
      subs.unsubscribe();
      console.log('Conexao fechada: ', subs.closed);
    }, 3000);
  }
// Promisse
  minhaPromisse(nome: string): Promise<string>{
    return new Promise((resolve, reject) => {
      if (nome === 'Eduardo') {
          setTimeout(() => {
            resolve('Seja bem vindo ' + nome);
          }, 5000);
      } else {
        reject('Ops! você não é o Eduardo');
      }
    });
  }

  // Observable
  minhaObservable(nome: string): Observable<string>{
    return new Observable(subscriber => {

      if (nome === 'Eduardo') {
        subscriber.next('Olá! ' + nome);
        subscriber.next('Olá! de novo ' + nome);

        setTimeout(() => {
          subscriber.next('Resposta com delay ' + nome);
        }, 5000);
        subscriber.complete();
      } else {
          subscriber.error('Ops! deu erro!');
      }
    });
  }

  usuarioObservable(nome: string, email: string): Observable<Usuario>{
    return new Observable(subscriber => {

      if (nome === 'Admin') {
       const usuario = new Usuario(nome, email);

       setTimeout(() => {
          subscriber.next(usuario);
        }, 1000);

       setTimeout(() => {
          subscriber.next(usuario);
        }, 2000);

       setTimeout(() => {
          subscriber.next(usuario);
        }, 3000);

       setTimeout(() => {
          subscriber.next(usuario);
        }, 4000);

       setTimeout(() => {
        subscriber.complete();
        }, 5000);
      } else {
          subscriber.error('Ops! deu erro!');
      }
    });
  }
}


export class Usuario {

  constructor(nome: string, email: string){
    this.nome = nome;
    this.email = email;
  }

  nome: string;
  email: string;
}
