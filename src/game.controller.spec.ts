import { Test, TestingModule } from '@nestjs/testing';
import { GameController } from './game.controller';
import { GameService } from './game.service';

describe('GameController', () => {
  let gameController: GameController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [GameController],
      providers: [GameService],
    }).compile();

    gameController = app.get<GameController>(GameController);
  });

  describe('root', () => {
    it('should return inserted game name with success', () => {
        const gameData = {
            name: 'It Takes Two',
            producer: 'Hazelight Studios',
            platform: 'PlayStation, Nintendo Switch, Xbox, Windows',
            parentalRating: 12,
            cooperative: true,
            rating: 5,
          };
      expect(gameController.createGame(gameData)).toBe('New game inserted with success: "It Takes Two"');
    });
  });
});
