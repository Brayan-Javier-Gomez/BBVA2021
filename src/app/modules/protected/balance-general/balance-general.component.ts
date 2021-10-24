import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AnalyticsService } from 'src/app/core/services/anaylitics/analytics.service';

import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { BasicsService } from 'src/app/core/services/basics/basics.service';
import * as SparkMD5 from 'spark-md5';
import { SERVER } from 'src/app/app.component';

@Component({
  selector: 'app-balance-general',
  templateUrl: './balance-general.component.html',
  styleUrls: ['./balance-general.component.css'],
  providers: [NgbActiveModal]
})
export class BalanceGeneralComponent implements OnInit {

  showLoading: boolean;
  showLoadingBank: boolean;
  idBank: number;
  dataBank: any;
  
  idReport: number;
  
  idSeason: any;
  specificSeason: boolean;
  allSeasons: any;
  seasonName: string;

  allCategories: any;
  categoriesData: any;
  allFeatures: any;

  allRows: any;

  allFiles: any;
  
  constructor(
    private router: Router,
    private analyticService: AnalyticsService,
    private modalService: NgbModal,
    private activeModal: NgbActiveModal,
    private basicService: BasicsService,
  ) { 

    this.showLoading = true;
    this.idReport = 3;

    this.idBank = 1;

    this.idSeason = 0;
    this.allSeasons = [];
    this.seasonName = 'Temporada'

    this.allCategories = [];
    this.categoriesData = [];
    this.allFeatures = [];

    this.allRows = [];
    this.getReportData();
    this.getDataDetails();
  }

  ngOnInit(): void {
  }

  getReportData(){
    this.analyticService.getReport(this.idReport).subscribe(
      data => {
        if ( data['status'] ) {
          this.categoriesData = data['results'];
        }
      }
    )
  }

  changeSeason(){
    this.getDataDetails();
  }

  getDataDetails(){
    this.allRows = [];
    let idPrevSeason;
    if(this.idSeason == 0){
      idPrevSeason = null;
    }else{
      idPrevSeason = this.idSeason;
    }
    this.analyticService.getDataFilter(this.idBank,this.idReport,idPrevSeason).subscribe(
      data => {
        if ( data['status'] ) {
          this.allSeasons = data['results']['seasons'];
          this.allCategories = data['results']['categories'];
          for (let category of this.allCategories ) {
            for ( let feature of category.features ){
              if ( Array.isArray(feature.amount) ) {
                const newRow = [feature.name].concat(feature.amount)
                this.allRows.push({'is_subtotal':feature.is_subtotal, 'items':newRow})
              }else{
                this.allRows.push({'is_subtotal':feature.is_subtotal, 'items':[feature.name, feature.amount]})
              }
              if ( feature.sub_features.length > 0 ){
                for(let subfeature of feature.sub_features){
                  if ( Array.isArray(subfeature.amount) ) {
                    const newRow = [subfeature.name].concat(subfeature.amount)
                    this.allRows.push({'is_subtotal':feature.is_subtotal, 'items':newRow})
                  }else{
                    this.allRows.push({'is_subtotal':feature.is_subtotal, 
                                        'items':[subfeature.name, subfeature.amount]})
                  }
                }
              }
            }
            this.allRows.push({'is_subtotal':'true', 'items':['Total ' + category.name]})
          }
        }
      }
    )
  }

  getBankInformation() {
    this.showLoadingBank = true;
    this.analyticService.getDataBank(this.idBank).subscribe((data) => {
      this.dataBank = data[0];
      this.showLoadingBank = false;
    });
  }

  getFiles() {
    this.showLoading = true;
    this.analyticService.getFiles(this.idBank).subscribe((data) => {
      this.allFiles = data;
      this.showLoading = false;
    });
  }

  filterByBank() {
    this.getBankInformation();
    this.getFiles();
  }

}
