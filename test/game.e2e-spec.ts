import { Test, TestingModule } from '@nestjs/testing';
import { HttpStatus, INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';

describe('GameController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/game (POST)', async () => {
    const gameData = {
      name: 'It Takes Two',
      producer: 'Hazelight Studios',
      platform: 'PlayStation, Nintendo Switch, Xbox, Windows',
      parentalRating: 12,
      cooperative: true,
      rating: 5,
    };

    const response = await request(app.getHttpServer())
      .post('/game')
      .send(gameData)
      .expect(HttpStatus.CREATED);

    expect(response.body).toEqual(gameData.name);
  });

  afterAll(async () => {
    await app.close();
  });
});
