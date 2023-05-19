import { mudConfig } from "@latticexyz/world/register";

export default mudConfig({
  tables: {
    Counter: {
      keySchema: {},
      schema: "uint32",
    },
    Crime: {
      keySchema: {
        id: "bytes32",
      },
      schema: {
        name: "string",
        /* Replace year:uint32 by blockheight:uint256 when available
         The idea would be to to add new crimes 
         to the list using corresponding historical transactions */
        year: "uint32",
        description: "string",
      },
    },
    Game: {
      keySchema: {
        id: "bytes32",
      },
      schema: {
        crime: "bytes32",
        player: "address",
        isGuilty: "bool",
        openingStatement: "string",
        closingStatement: "string",
        victimQuestionOne: "string",
        victimQuestionTwo: "string",
        victimQuestionThree: "string",
        victimAnswerOne: "string",
        victimAnswerTwo: "string",
        victimAnswerThree: "string",
        verdict: "string",
      },
    },
    Player: {
      keySchema: {
        id: "address",
      },
      schema: {
        gameCount: "uint32",
      },
    },
  },
});
