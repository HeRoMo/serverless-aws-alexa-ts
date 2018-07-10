import { HandlerInput, SkillBuilders } from "ask-sdk";
import { Handler } from "aws-lambda";

import ErrorHandler from "./src/handlers/ErrorHandler";
import HelloIntentHandler from "./src/handlers/HelloIntentHandler";
import LaunchRequestHandler from "./src/handlers/LaunchRequestHandler";

export const handler: Handler = SkillBuilders.standard()
    .addRequestHandlers(
      LaunchRequestHandler,
      HelloIntentHandler,
    )
    .addErrorHandlers(ErrorHandler)
    .lambda();
