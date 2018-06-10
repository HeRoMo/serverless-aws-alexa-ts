import * as Alexa from "ask-sdk";
import { RequestEnvelope, ResponseEnvelope, services } from "ask-sdk-model";
import { Context, Handler } from "aws-lambda";

let skill: Alexa.Skill;

export const hello: Handler = async (event: RequestEnvelope, context: Context) => {
  if (!skill) {
    skill = Alexa.SkillBuilders.custom()
      .addRequestHandlers(
        LaunchRequestHandler,
        HelloIntentHandler)
      .addErrorHandlers(ErrorHandler)
      .create();
  }
  return skill.invoke(event, context);
};

const LaunchRequestHandler = {
    canHandle(handlerInput: Alexa.HandlerInput) {
      return handlerInput.requestEnvelope.request.type === "LaunchRequest";
  },
  handle(handlerInput: Alexa.HandlerInput) {
      const speechText = "Welcome to the Alexa Skills Kit, you can say hello!";
      return handlerInput.responseBuilder
          .speak(speechText)
          .reprompt(speechText)
          .withSimpleCard("Hello World", speechText)
          .getResponse();
  },
};

const HelloIntentHandler = {
  canHandle(handlerInput: Alexa.HandlerInput) {
      return handlerInput.requestEnvelope.request.type === "IntentRequest"
          && handlerInput.requestEnvelope.request.intent.name === "HelloIntent";
  },
  handle(handlerInput: Alexa.HandlerInput) {
      const speechText = "Hello!";
      return handlerInput.responseBuilder
          .speak(speechText)
          .withSimpleCard("Hello!", speechText)
          .getResponse();
  },
};

const ErrorHandler = {
  canHandle(handlerInput: Alexa.HandlerInput, error: Error) {
      return true;
  },
  handle(handlerInput: Alexa.HandlerInput, error: Error) {
      return handlerInput.responseBuilder
          .speak("error")
          .getResponse();
  },
};
