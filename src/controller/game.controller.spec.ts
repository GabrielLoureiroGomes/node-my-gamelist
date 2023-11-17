import { Test, TestingModule } from "@nestjs/testing";
import { GameController } from "./game.controller";
import { GameService } from "../service/game.service";
import { CreateGameDto } from "src/dto/createGame";
import { GameRepository } from "../repository/game.repository";
import { Game } from "src/domain/game";

jest.mock("../repository/game.repository");

describe("GameController", () => {
  let gameController: GameController;
  let gameService: GameService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [GameController],
      providers: [GameService, GameRepository],
    }).compile();

    gameController = app.get<GameController>(GameController);
    gameService = app.get<GameService>(GameService);
  });

  it("should create a game with success", async () => {
    const gameData: CreateGameDto = {
      name: "It Takes Two",
      producer: "Hazelight Studios",
      platform:
        "PlayStation 4, Xbox One, PlayStation 5, Xbox Series X and Series S, Microsoft Windows",
      parentalRating: 12,
      cooperative: true,
      rating: 5,
    };

    jest.spyOn(gameService, "createGame").mockResolvedValue("It Takes Two");

    const result = await gameController.createGame(gameData);

    expect(result).toBe("It Takes Two");
    expect(gameService.createGame).toHaveBeenCalledTimes(1);
  });

  it("should return a game with success", async () => {
    const gamesToBeReturned: Game[] = [
      {
        id: 1,
        name: "It Takes Two",
        producer: "Hazelight Studios",
        platform:
          "PlayStation 4, Xbox One, PlayStation 5, Xbox Series X and Series S, Microsoft Windows",
        parentalRating: 12,
        cooperative: true,
        rating: 5,
      },
    ];

    jest.spyOn(gameService, "getGames").mockResolvedValue(gamesToBeReturned);

    const result = await gameController.getGames();

    expect(result).toEqual(gamesToBeReturned);
    expect(gameService.getGames).toHaveBeenCalledTimes(1);
  });
});
