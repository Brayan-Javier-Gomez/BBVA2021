import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AnalyticsService } from 'src/app/core/services/anaylitics/analytics.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  showLoading: boolean;
  showLoadingBank: boolean;
  allFiles: any;
  idBank: any;
  bankSelected: any;
  dataBank: any;
  category: any;
  colors: any;
  constructor(
    private router: Router,
    private analyticService: AnalyticsService
  ) {
    this.showLoading = true;
    this.showLoadingBank = true;
    this.allFiles = [];
    this.idBank = null;
    this.bankSelected = 1;
    this.getFiles();
    this.getBankInformation();
    this.getCategories();
    this.colors = [
      '#88CA9A',
      '#5BBEFF',
      '#F8CD51',
      '#FAB3F0',
      '#E77D8E',
      '#FAB27F',
      '#F59799',
      '#5AC4C4',
    ];
  }

  goToFiles() {
    this.router.navigate(['/dashboard/files']);
  }

  getBankInformation() {
    this.showLoadingBank = true;
    this.analyticService.getDataBank(this.bankSelected).subscribe((data) => {
      this.dataBank = data[0];
      this.showLoadingBank = false;
    });
  }

  getFiles() {
    this.showLoading = true;
    this.analyticService.getFiles(this.bankSelected).subscribe((data) => {
      this.allFiles = data;
      this.showLoading = false;
    });
  }

  getCategories() {
    this.analyticService.getCategories().subscribe((categorY) => {
      this.category = categorY;
      this.category.forEach((data, index)=>{
        this.category[index]["color"]=this.colors[index]
      })
      console.log(this.category)
      
    });
  }

  filterByBank() {
    this.getBankInformation();
    this.getFiles();
  }

  exitLogin(err) {
    if (err.status === 401) {
      localStorage.clear();
      sessionStorage.clear();
      this.router.navigateByUrl('/auth/login');
    } else {
      //this.toastService.warning('Ocurrió un problema');
    }
  }
}
