import { HandlerInput, RequestHandler } from "ask-sdk";
import { Response } from "ask-sdk-model";

const HelpIntentHandler: RequestHandler = {
    canHandle(handlerInput: HandlerInput): boolean {
        return handlerInput.requestEnvelope.request.type === "IntentRequest"
            && handlerInput.requestEnvelope.request.intent.name === "AMAZON.HelpIntent";
    },
    handle(handlerInput: HandlerInput): Response {
        const speechText = "こんにちは。と言ってみてください。";

        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)
            .withSimpleCard("Hello World", speechText)
            .getResponse();
    },
};

export default HelpIntentHandler;
