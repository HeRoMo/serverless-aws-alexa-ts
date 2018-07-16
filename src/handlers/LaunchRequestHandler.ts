import { HandlerInput } from "ask-sdk";

const LaunchRequestHandler = {
    canHandle(handlerInput: HandlerInput) {
      return handlerInput.requestEnvelope.request.type === "LaunchRequest";
  },
  handle(handlerInput: HandlerInput) {
      const speechText = "今日の気分はいかがですか？";
      return handlerInput.responseBuilder
          .speak(speechText)
          .reprompt(speechText)
          .withSimpleCard("今日の気分を教えてください。", speechText)
          .getResponse();
  },
};

export default LaunchRequestHandler;
