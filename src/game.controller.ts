import { Controller, Post, Body } from '@nestjs/common';
import { GameService } from './game.service';

@Controller('game')
export class GameController {
  constructor(private readonly gameService: GameService) {}

  @Post()
  createGame(@Body() gameData: any): string {
    return this.gameService.createGame(gameData);
  }
}
