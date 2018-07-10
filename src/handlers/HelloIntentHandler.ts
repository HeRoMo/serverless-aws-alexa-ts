import { HandlerInput, RequestHandler } from "ask-sdk";
import { Response } from "ask-sdk-model";

const HelloIntentHandler: RequestHandler = {
    canHandle(handlerInput: HandlerInput): boolean {
        return handlerInput.requestEnvelope.request.type === "IntentRequest"
            && handlerInput.requestEnvelope.request.intent.name === "HelloIntent";
    },
    handle(handlerInput: HandlerInput): Response {
        const speechText = "Hello!";
        return handlerInput.responseBuilder
            .speak(speechText)
            .withSimpleCard("Hello!", speechText)
            .getResponse();
    },
  };

export default HelloIntentHandler;
