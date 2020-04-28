import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    constructor(
        private firestore: AngularFirestore,
    ) {
    }

    getAll(table: string) {
        return new Promise((resolve, reject) => {
            this.firestore.collection<any>(table).snapshotChanges().pipe(map(actions => {
                return actions.map((action: any) => {
                    const data = action.payload.doc.data() as any;
                    const uid = action.payload.doc.id;
                    return { uid, ...data };
                })
            })).subscribe((data: any) => {
                resolve(data);
            }, error => {
                reject(error)
            })
        })
    }
}

