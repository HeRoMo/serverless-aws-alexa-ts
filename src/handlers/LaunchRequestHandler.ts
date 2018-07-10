import { HandlerInput } from "ask-sdk";

const LaunchRequestHandler = {
    canHandle(handlerInput: HandlerInput) {
      return handlerInput.requestEnvelope.request.type === "LaunchRequest";
  },
  handle(handlerInput: HandlerInput) {
      const speechText = "Welcome to the Alexa Skills Kit, you can say hello!";
      return handlerInput.responseBuilder
          .speak(speechText)
          .reprompt(speechText)
          .withSimpleCard("Hello World", speechText)
          .getResponse();
  },
};

export default LaunchRequestHandler;
