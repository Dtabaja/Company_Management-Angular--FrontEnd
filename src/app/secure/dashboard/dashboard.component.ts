import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';
import * as c4 from 'c3';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private orderService: OrderService) {
  }

  ngOnInit(): void {
    let chart = c4.generate({
      bindto: '#chart',
      data: {
        x: 'x',
        columns: [
          ['x'],
          ['Sales'],
        ],
        types: {
          Sales: 'bar'
        }
      },
      axis: {
        x: {
          type: 'timeseries',
          tick: {
            format: '%Y-%m-%d'
          }
        }
      }
    });

    this.orderService.chart().subscribe(
      (result: { date: string, sum: number }[]) => {
        chart.load({
          columns: [
            ['x', ...result.map(r => r.date)],
            ['Sales', ...result.map(r => r.sum)]
          ]
        });
      }
    );
  }

}