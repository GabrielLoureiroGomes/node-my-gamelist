import { Controller, Post, Body } from "@nestjs/common";
import { GameService } from "../service/game.service";
import { CreateGameDto } from "../dto/createGame";

@Controller("game")
export class GameController {
  constructor(private readonly gameService: GameService) {}

  @Post()
  createGame(@Body() gameData: CreateGameDto): string {
    return this.gameService.createGame(gameData);
  }
}
