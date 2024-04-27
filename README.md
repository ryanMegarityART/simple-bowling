# Simple Bowling Game

## Goals

- use the inbuilt node test runner for the first time

- trial a rigorous TDD approach as advocated by Uncle Bob in his book 'The Clean Coder'

## Thoughts while coding

- test-runner docs did not state assert was needed as an additional export

- no auto-import and intellisense without TypeScript feels prehistoric and slow

- however, the test running itself is fast! no external dependencies and the errors are clear and helpful so far

## Rules

### Spare

10 points + the number of pins you knock down for your first attempt at the next frame.

### Strike

score 10 points + the number of pins you knock down for the entire next frame.

### Double

1st frame – 20 points + the number of pins you knock down in 3rd frame

2nd frame – same as scoring for strike

### Turkey

1st frame - 30 points

2nd frame – same as scoring for double

3rd frame – same as scoring for strike

### Four-Bagger

1st frame - 30 points

2nd frame - 30 points

3rd frame – same as scoring for double

4th frame – same as scoring for strike
