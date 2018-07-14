import { HandlerInput, SkillBuilders } from "ask-sdk";
import { Handler } from "aws-lambda";

import CancelAndStopIntentHandler from "./src/handlers/CancelAndStopIntentHandler";
import ErrorHandler from "./src/handlers/ErrorHandler";
import HelloIntentHandler from "./src/handlers/HelloIntentHandler";
import HelpIntentHandler from "./src/handlers/HelpIntentHandler";
import LaunchRequestHandler from "./src/handlers/LaunchRequestHandler";

// uncomment if you use dynamodb and use invoke local
// import * as AWS from "aws-sdk";
// if (process.env.IS_LOCAL) {
//   AWS.config.update({
//     accessKeyId: "dummy",
//     dynamodb: {
//       endpoint: "http://localhost:8100",
//       region: "us-east-1",
//     },
//     secretAccessKey: "dummy",
//   });
// }

export const handler: Handler = SkillBuilders.standard()
    .addRequestHandlers(
      LaunchRequestHandler,
      HelloIntentHandler,
      HelpIntentHandler,
      CancelAndStopIntentHandler,
    )
    .addErrorHandlers(ErrorHandler)
    // .withTableName(process.env.DYNAMODB_TABLE) // uncomment if you use dynamodb
    // .withAutoCreateTable(true)
    .lambda();
