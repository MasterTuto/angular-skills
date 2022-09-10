import { Component, OnInit } from "@angular/core";
import { LikeCounterService } from "./services/like-counter.service";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  likeCount = 0;
  mostLiked: Skill = undefined;
  name = "Angular";

  constructor(private likeCounter: LikeCounterService) {}

  ngOnInit() {
    this.likeCounter.counter.subscribe((count) => (this.likeCount += count));
    this.likeCounter.mostLiked.subscribe((liked) => (this.mostLiked = liked));
  }
}
