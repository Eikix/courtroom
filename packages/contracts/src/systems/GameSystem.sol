// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0;

import { System } from "@latticexyz/world/src/System.sol";
import { Game, Player } from "../codegen/Tables.sol";

contract GameSystem is System {
  function create(bytes32 crime) public returns (bytes32) {
    // Get the player's game count
    uint32 gameCount = Player.get(_msgSender());

    // Create the game with unique ID and increment the player's game count
    bytes32 id = keccak256(abi.encodePacked(_msgSender(), crime, gameCount));
    uint32 newGameCount = gameCount + 1;
    Player.set(_msgSender(), newGameCount);

    // Set the game's data
    Game.set(id, crime, _msgSender(), true, "", "", "", "", "", "", "", "", "");
    return id;
  }

  // Todo: Add a function to register an interaction for each interaction to be committed on chain
  // function registerInteraction(bytes32 game, uint8 phase, string memory interaction) public {
  //   // Get the game's data
  //   // Set the game's data
  // }

  function endGame(bytes32 gameId, bool isGuilty) public {
    // Set the game's verdict
    Game.setIsGuilty(gameId, isGuilty);
  }
}
