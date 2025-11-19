import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-customers',
  standalone: false,
  templateUrl: './customers.html',
  styleUrl: './customers.css',
})
export class Customers {
  customers :any;
  constructor(private http: HttpClient) {
  }
ngOnInit() {
  // REMARQUE BIEN LE <any> JUSTE APRÈS .get
  this.http.get<any>("http://localhost:8888/customer-service/api/customers")
    .subscribe({
      next: data => {
        console.log("Données reçues du backend:", data); // Pour t'aider à debuguer
        this.customers = data._embedded.products;
      },
      error: err => {
        console.error("Erreur lors de la récupération:", err);
      }
    });
}

}
