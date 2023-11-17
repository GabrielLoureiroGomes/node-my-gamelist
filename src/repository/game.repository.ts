import { PrismaClient } from "@prisma/client";
import { CreateGameDto } from "src/dto/createGame";

const prisma = new PrismaClient();

export async function createGame(gameToInsert: CreateGameDto): Promise<string> {
  try {
    await prisma.gamelist.create({
      data: gameToInsert,
    });
    console.log("Registro inserido com sucesso!");
    return gameToInsert.name;
  } catch (error) {
    console.error("Erro ao inserir no banco:", error);
  } finally {
    await prisma.$disconnect();
  }
}

export async function getGames(): Promise<Game[]> {
  try {
    const games = await prisma.gamelist.findMany();
    return games;
  } catch (error) {
    console.error("Erro ao buscar no banco:", error);
  } finally {
    await prisma.$disconnect();
  }
}
