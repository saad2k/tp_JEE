import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-products',
  standalone: false,
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products implements OnInit {
  products: any; // On déclare que products peut être n'importe quoi

  constructor(private http: HttpClient, private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    // REMARQUE BIEN LE <any> JUSTE APRÈS .get
    this.http.get<any>("http://localhost:8888/inventory-service/api/products")
      .subscribe({
        next: data => {
          console.log("Données reçues du backend:", data); // Pour t'aider à debuguer
          this.products = data._embedded.products;
          this.cdr.detectChanges();
        },
        error: err => {
          console.error("Erreur lors de la récupération:", err);
        }
      });
  }
}
