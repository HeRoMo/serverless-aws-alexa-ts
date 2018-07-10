import { ErrorHandler, HandlerInput } from "ask-sdk";
import { Response } from "ask-sdk-model";

const ErrorHandler: ErrorHandler = {
    canHandle(handlerInput: HandlerInput, error: Error): boolean {
        return true;
    },
    handle(handlerInput: HandlerInput, error: Error): Response {
        return handlerInput.responseBuilder
            .speak("error")
            .getResponse();
    },
  };

export default ErrorHandler;
