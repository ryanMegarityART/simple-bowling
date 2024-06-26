const { describe, it } = require("node:test");
const assert = require("assert");
const { BowlingGame } = require("./bowling.js");

function rollAllSame(game, numberOfRolls, scoreEachRoll) {
  for (let i = 0; i < numberOfRolls; i++) {
    game.roll(scoreEachRoll);
  }
}

function rollSpare(game) {
  game.roll(5);
  game.roll(5);
}

function rollStrike(game) {
  game.roll(10);
}

describe("Bowling Game Test", () => {
  it("calculates a gutter game correctly", () => {
    const game = new BowlingGame();
    rollAllSame(game, 20, 0);
    assert.strictEqual(game.score(), 0);
  });
  it("calculates a game of all ones correctly", () => {
    const game = new BowlingGame();
    rollAllSame(game, 20, 1);
    assert.strictEqual(game.score(), 20);
  });
  it("calculates a game with one spare correctly", () => {
    const game = new BowlingGame();
    rollSpare(game);
    game.roll(3);
    rollAllSame(game, 17, 0);
    assert.strictEqual(game.score(), 16);
  });
  it("calculates a game with one strike correctly", () => {
    const game = new BowlingGame();
    rollStrike(game);
    game.roll(3);
    game.roll(4);
    rollAllSame(game, 16, 0);
    assert.strictEqual(game.score(), 24);
  });
  it("calculates the score correctly for a perfect game", () => {
    const game = new BowlingGame();
    rollAllSame(game, 12, 10);
    assert.strictEqual(game.score(), 300);
  });
});
