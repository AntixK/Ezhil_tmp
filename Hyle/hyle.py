from easyAI import TwoPlayersGame
from easyAI.Player import Human_Player
import numpy as np

class Hyle(TwoPlayersGame):
    """
    Board positions are as follows
        1  2  3  4  5
        6  7  8  9  10
        11 12 13 14 15
        16 17 18 19 20
        21 22 23 24 25
    """

    def __init__(self, players):
        self.players = players
        self.board = [0 for i in range(25)]
        self.nplayer = 1  # player 1 starts.

    def possible_moves(self):
        pass

    def make_move(self, move):
        self.board[int(move) - 1] = self.nplayer

    def unmake_move(self, move):  # optional method (speeds up the AI)
        self.board[int(move) - 1] = 0

    def show(self):
        print('\n' + '\n'.join([
            ' '.join([['.', 'O', 'X'][self.board[3 * j + i]]
                      for i in range(5)])
            for j in range(5)]))


    def is_over(self):
        return (self.possible_moves() == [])

if __name__ == "__main__":
    from easyAI import AI_Player, Negamax

    ai_algo = Negamax(6)
    Hyle([Human_Player(), AI_Player(ai_algo)]).play()