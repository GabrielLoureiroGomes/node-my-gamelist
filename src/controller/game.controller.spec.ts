import { Test, TestingModule } from "@nestjs/testing";
import { GameController } from "./game.controller";
import { GameService } from "../service/game.service";
import { CreateGameDto } from "src/dto/createGame";

describe("GameController", () => {
  let gameController: GameController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [GameController],
      providers: [GameService],
    }).compile();

    gameController = app.get<GameController>(GameController);
  });

  describe("root", () => {
    it("should return inserted game name with success", () => {
      const gameData: CreateGameDto = {
        name: "It Takes Two",
        producer: "Hazelight Studios",
        platform:
          "PlayStation 4, Xbox One, PlayStation 5, Xbox Series X and Series S, Microsoft Windows",
        parentalRating: 12,
        cooperative: true,
        rating: 5,
      };

      expect(gameController.createGame(gameData)).toBe(
        'New game inserted with success: "It Takes Two"'
      );
    });
  });
});
