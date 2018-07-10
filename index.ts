import { HandlerInput, SkillBuilders } from "ask-sdk";
import { Handler } from "aws-lambda";

import ErrorHandler from "./src/handlers/ErrorHandler";
import HelloIntentHandler from "./src/handlers/HelloIntentHandler";
import HelpIntentHandler from "./src/handlers/HelpIntentHandler";
import LaunchRequestHandler from "./src/handlers/LaunchRequestHandler";

export const handler: Handler = SkillBuilders.standard()
    .addRequestHandlers(
      LaunchRequestHandler,
      HelloIntentHandler,
      HelpIntentHandler,
    )
    .addErrorHandlers(ErrorHandler)
    .lambda();
