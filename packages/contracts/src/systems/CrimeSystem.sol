// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0;

import { System } from "@latticexyz/world/src/System.sol";
import { Crime } from "../codegen/Tables.sol";

contract CrimeSystem is System {
  function create(string memory name, uint32 year, string memory description) public returns (bytes32) {
    bytes32 id = keccak256(abi.encode(name));
    Crime.set(id, name, year, description);
    return id;
  }
}
