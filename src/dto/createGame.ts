import { IsBoolean, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateGameDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  producer: string;

  @IsString()
  @IsNotEmpty()
  platform: string;

  @IsNumber()
  @IsNotEmpty()
  parentalRating: number;

  @IsBoolean()
  @IsNotEmpty()
  cooperative: boolean;

  @IsNumber()
  @IsNotEmpty()
  rating: number;
}
