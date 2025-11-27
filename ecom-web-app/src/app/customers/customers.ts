import {Component, OnInit, ChangeDetectorRef} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-customers',
  standalone: false,
  templateUrl: './customers.html',
  styleUrl: './customers.css',
})
export class Customers implements OnInit{
  customers :any;
  constructor(private http: HttpClient, private cdr: ChangeDetectorRef) {
  }
ngOnInit() {
  // REMARQUE BIEN LE <any> JUSTE APRÈS .get
  this.http.get<any>("http://localhost:8888/customer-service/api/customers")
    .subscribe({
      next: data => {
        console.log("Données reçues du backend:", data); // Pour t'aider à debuguer
        this.customers = data._embedded.customers;
        this.cdr.detectChanges();
      },
      error: err => {
        console.error("Erreur lors de la récupération:", err);
      }
    });
}


}
