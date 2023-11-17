import { Module } from "@nestjs/common";
import { GameController } from "./controller/game.controller";
import { GameService } from "./service/game.service";

@Module({
  imports: [],
  controllers: [GameController],
  providers: [GameService],
})
export class AppModule {}
