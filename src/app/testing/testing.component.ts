import { Component, OnInit } from "@angular/core";
import { AuthService } from "app/services/auth.service";

@Component({
  selector: "app-testing",
  templateUrl: "./testing.component.html",
  styleUrls: ["./testing.component.scss"],
})
export class TestingComponent implements OnInit {
  testingData$: any = this.testService.testData$;

  constructor(private testService: AuthService) {}

  ngOnInit(): void {
    this.testService.fetchData();
  }
}
