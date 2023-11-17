import { Module } from "@nestjs/common";
import { GameController } from "./controller/game.controller";
import { GameService } from "./service/game.service";
import { GameRepository } from "./repository/game.repository";
import { PrismaClient } from "@prisma/client";

@Module({
  imports: [],
  controllers: [GameController],
  providers: [GameService, GameRepository, PrismaClient],
})
export class AppModule {}
