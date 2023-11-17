import { Injectable } from "@nestjs/common";
import { CreateGameDto } from "src/dto/createGame";
import { GameRepository } from "../repository/game.repository";

@Injectable()
export class GameService {
  private gameRepository: GameRepository;

  constructor() {
    this.gameRepository = new GameRepository();
  }

  async createGame(gameData: CreateGameDto): Promise<string> {
    try {
      await this.gameRepository.createGame(gameData);
      return gameData.name;
    } catch (error) {
      console.error("Erro ao inserir novo registro:", error);
      throw new Error("Erro ao inserir novo registro");
    }
  }

  async getGames(): Promise<Game[]> {
    try {
      const gamelist = this.gameRepository.getGames();
      return gamelist;
    } catch (error) {
      console.error("Erro ao buscar registro:", error);
      throw new Error("Erro ao buscar registro");
    }
  }
}
