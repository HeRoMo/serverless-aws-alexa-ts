import { HandlerInput, RequestHandler } from "ask-sdk";
import { Response } from "ask-sdk-model";
import * as Speech from "ssml-builder";

const HelloIntentHandler: RequestHandler = {
    canHandle(handlerInput: HandlerInput): boolean {
        return handlerInput.requestEnvelope.request.type === "IntentRequest"
            && handlerInput.requestEnvelope.request.intent.name === "HelloIntent";
    },
    handle(handlerInput: HandlerInput): Response {
        const speechText = new Speech().say("Hello!").ssml();
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)
            .withSimpleCard("Hello!", speechText)
            .getResponse();
    },
  };

export default HelloIntentHandler;
