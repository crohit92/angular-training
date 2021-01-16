import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private store = localStorage;
  set(key: string, value: any) {
    const stringvalue = JSON.stringify(value);
    this.store.setItem(key, stringvalue);
  }

  get(key: string) {
    const storedValue = this.store.getItem(key);
    return JSON.parse(storedValue);
  }

  clear() {
    this.store.clear();
  }

  remove(key: string) {
    this.store.removeItem(key);
  }

}
// export class StorageService {
//   // private store: Map<string, string> = new Map<string, string>();
//   private store = localStorage;
//   set(key: string, value: any) {
//     const stringvalue = JSON.stringify(value);
//     this.store.setItem(key, stringvalue);
//     // this.store.set(key, stringvalue);
//   }

//   get(key: string) {
//     // let storedValue = this.store.get(key);
//     const storedValue = this.store.getItem(key);
//     // storedValue = storedValue ?? this.store.getItem(key);
//     return JSON.parse(storedValue);
//   }

//   clear() {
//     this.store.clear();
//     // this.store.clear();
//   }

//   remove(key: string) {
//     this.store.removeItem(key);
//     // this.store.delete(key);
//   }

// }
