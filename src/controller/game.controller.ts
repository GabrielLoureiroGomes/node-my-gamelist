import { Controller, Post, Body, Get } from "@nestjs/common";
import { GameService } from "../service/game.service";
import { CreateGameDto } from "../dto/createGame";

@Controller("game")
export class GameController {
  constructor(private readonly gameService: GameService) {}

  @Post()
  createGame(@Body() gameData: CreateGameDto): Promise<string> {
    return this.gameService.createGame(gameData);
  }

  @Get()
  getGames(): Promise<Game[]> {
    return this.gameService.getGames();
  }
}
