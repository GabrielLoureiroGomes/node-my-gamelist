import { Injectable } from '@nestjs/common';

@Injectable()
export class GameService {
  private games = [];

  createGame(gameData: any): string {
    this.games.push(gameData);
    return `New game inserted with success: ${JSON.stringify(gameData.name)}`;
  }
}
