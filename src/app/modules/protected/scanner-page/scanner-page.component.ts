import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AnalyticsService } from 'src/app/core/services/anaylitics/analytics.service';

import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { BasicsService } from 'src/app/core/services/basics/basics.service';
import * as SparkMD5 from 'spark-md5';
import { SERVER } from 'src/app/app.component';

let md5;

@Component({
  selector: 'app-scanner-page',
  templateUrl: './scanner-page.component.html',
  styleUrls: ['./scanner-page.component.css'],
  providers: [NgbActiveModal]
})
export class ScannerPageComponent implements OnInit {
  allFiles: any;
  areThereFiles: any;
  items: any;

  showLoading: boolean;
  loadingUploadFiles: boolean;
  fileToSearch: string;
  file: any;
  sourceFile: any;
  // upload
  fileData: string;
  base64Image: string;
  image: boolean;
  title: string;
  fileName: string;
  tempFileName: string;
  uploadingFile: boolean;
  ready: boolean;
  newOrEditFile: boolean;
  isEditFile: boolean;
  areThereChange: boolean;
  selectedFile: any;
  isBusiness: boolean;
  valueProgressBar: number;
  showProgressBar: boolean;
  currentPage: string;
  inputUrlVideo: string;
  uploadType: string;
  descriptionFile: string;
  currentJustify: string;
  response: any;
  parentVideoElement: any;
  listIconMaterials: any;

  appData: any;
  fileByUpload: any;
  uploadId = '';
  chunkfile: any;

  idItems = [];
  fileItems = 'FILES';

  changedFile = false;
  titleModalMaterial = 'Vista Previa';

  idBank: any;

  constructor(
    private router: Router,
    private analyticService: AnalyticsService,
    private modalService: NgbModal,
    private activeModal: NgbActiveModal,
    private basicService: BasicsService,
    //private toastService: ToastrService,
  ) {
    this.showLoading = true;
    this.loadingUploadFiles = false;
    this.idBank = null;

    this.allFiles = [];
    this.items = [];

    this.getFiles();
  }

  ngOnInit(): void {
    if (this.allFiles.length > 0) {
      this.allFiles.sort(this.compare);
      this.areThereFiles = true;
    }
  }

  getFiles() {
    this.showLoading = true;
    this.analyticService.getFiles(this.idBank).subscribe(
      data => {
        this.allFiles = data;
        this.showLoading = false;
    })
  }

  urlify(text) {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    return text.replace(urlRegex, function (url) {
      return '<a href="' + url + '">' + url + '</a>';
    })
  }

  initializeItems() {
    this.items = this.allFiles;
  }

  searchFilesbyName(event) {
    this.initializeItems();
    const val = event.target.value;
    if (val && val.trim() !== '') {
      this.items = this.items.filter((item) => {
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1)
      })
    }
  }

  clickFile() {
    //document.getElementById('fileInput').click();
  }


  compare(a, b) {
    if (a.priority > b.priority) {
      return 1;
    }
    if (a.priority < b.priority) {
      return -1;
    }
    return 0;
  }

  overMouse(item) {
    item.selected = true;
  }

  leaveMouse(item) {
    item.selected = false;
  }

  open(modal) {
    const MODAL_REF = this.modalService.open(modal, { backdrop: 'static' });
    this.activeModal = MODAL_REF;
  }

  close() {
    this.activeModal.close();
  }

  exitLogin(err) {
    if (err.status === 401) {
        localStorage.clear();
        sessionStorage.clear();
        this.router.navigateByUrl('/auth/login')
    } else {
      //this.toastService.warning('Ocurrió un problema');
    }
  }

  closeNewOrEditFile() {
    this.fileName = '';
    this.title = '';
    this.isEditFile = false;
    this.newOrEditFile = false;
    this.close();
  }

}
