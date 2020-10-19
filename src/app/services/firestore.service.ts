import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  constructor(
    private firestore: AngularFirestore
  ) {}

  public getProduct(documentId: string) {
    return this.firestore.collection('products').doc(documentId).snapshotChanges();
  }

  public getAllProducts() {
    return this.firestore.collection('products').snapshotChanges();
  }

  public getImage(documentId: string) {
    return this.firestore.collection('images').doc(documentId).snapshotChanges();
  }

  public getAllImages() {
    return this.firestore.collection('images').snapshotChanges();
  }

  public getCarousel(documentId: string) {
    return this.firestore.collection('carousel').doc(documentId).snapshotChanges();
  }

  public getAllCarousels() {
    return this.firestore.collection('carousel').snapshotChanges();
  }

}