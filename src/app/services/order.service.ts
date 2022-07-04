import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RestService } from './rest.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService extends RestService {
  endpoint = `${environment.api}/orders`;
  exportFile = `${environment.api}/orders/export`;
  chartTable = `${environment.api}/orders/chart`;
  export():Observable<any>{
    return this.http.post(this.exportFile,{},{responseType:'blob'})
  }

  chart():Observable<any>{
    return this.http.get(this.chartTable)
  }
}
  
