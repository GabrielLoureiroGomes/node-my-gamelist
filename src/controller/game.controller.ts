import { Controller, Post, Body, Get } from "@nestjs/common";
import { GameService } from "../service/game.service";
import { CreateGameDto } from "../dto/createGame";
import { Game } from "src/domain/game";

@Controller("game")
export class GameController {
  constructor(private readonly gameService: GameService) {}

  @Post()
  createGame(@Body() gameData: CreateGameDto): Promise<string> {
    const createdGame = this.gameService.createGame(gameData);
    return createdGame;
  }

  @Get()
  getGames(): Promise<Game[]> {
    return this.gameService.getGames();
  }
}
