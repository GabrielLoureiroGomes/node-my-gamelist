import { Test, TestingModule } from "@nestjs/testing";
import { GameController } from "./game.controller";
import { GameService } from "../service/game.service";
import { CreateGameDto } from "src/dto/createGame";
import { createGame, getGames } from "../repository/game.repository";

jest.mock("../repository/game.repository");

describe("GameController", () => {
  let gameController: GameController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [GameController],
      providers: [GameService],
    }).compile();

    gameController = app.get<GameController>(GameController);
    jest.clearAllMocks();
  });

  describe("Create Game Tests", () => {
    it("should create a game with success", () => {
      const gameData: CreateGameDto = {
        name: "It Takes Two",
        producer: "Hazelight Studios",
        platform:
          "PlayStation 4, Xbox One, PlayStation 5, Xbox Series X and Series S, Microsoft Windows",
        parentalRating: 12,
        cooperative: true,
        rating: 5,
      };

      (createGame as jest.Mock).mockResolvedValue(gameData.name);

      expect(gameController.createGame(gameData)).toBe("It Takes Two");
      expect(createGame).toHaveBeenCalledTimes(1);
    });
  });

  describe("Get Games Tests", () => {
    it("should return all games", () => {
      const gamesReturned = [
        {
          name: "It Takes Two",
          producer: "Hazelight Studios",
          platform:
            "PlayStation 4, Xbox One, PlayStation 5, Xbox Series X and Series S, Microsoft Windows",
          parentalRating: 12,
          cooperative: true,
          rating: 5,
        },
      ];

      (getGames as jest.Mock).mockResolvedValue([gamesReturned]);

      expect(gameController.getGames()).toEqual([gamesReturned]);
      expect(getGames).toHaveBeenCalledTimes(1);
    });
  });
});
