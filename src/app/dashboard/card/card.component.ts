import {
  animate,
  state,
  style,
  transition,
  trigger,
} from "@angular/animations";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Component, OnInit, Input } from "@angular/core";
import { LikeCounterService } from "src/app/services/like-counter.service";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.css"],
  animations: [
    trigger("toShow", [
      state(
        "visible",
        style({
          opacity: 1,
          transform: "scale(1)",
        })
      ),
      transition(":enter", [
        style({ opacity: 0, transform: "scale(0)" }),
        animate("0.5s"),
      ]),
    ]),
  ],
})
export class CardComponent implements OnInit {
  @Input() card: Skill;
  constructor(
    private http: HttpClient,
    private likeCounter: LikeCounterService
  ) {}

  ngOnInit() {}

  onLike(card: Skill) {
    this.http
      .put(`/api/skills/${card.id}`, { ...card, likes: card.likes + 1 })
      .subscribe(() => {
        this.card.likes++;
        this.likeCounter.increment(1);
        this.likeCounter.setMostLiked(card);
      });
  }

  onShare(card: any) {
    window.open("https://www.linkedin.com/in/brenodasilva547/", "_blank");
  }
}
