import { Injectable } from "@nestjs/common";
import { CreateGameDto } from "src/dto/createGame";
import { createGame, getGames } from "src/repository/game.repository";

@Injectable()
export class GameService {
  async createGame(gameData: CreateGameDto): Promise<string> {
    try {
      return createGame(gameData);
    } catch (error) {
      console.error("Erro ao inserir novo registro:", error);
      throw new Error("Erro ao inserir novo registro");
    }
  }

  async getGames(): Promise<Game[]> {
    try {
      return getGames();
    } catch (error) {
      console.error("Erro ao buscar registro:", error);
      throw new Error("Erro ao buscar registro");
    }
  }
}
