import { HandlerInput, RequestHandler } from "ask-sdk";
import { IntentRequest, Response, Slot } from "ask-sdk-model";
import * as Speech from "ssml-builder";

const FeelingIntentHandler: RequestHandler = {
  canHandle(handlerInput: HandlerInput): boolean {
    return handlerInput.requestEnvelope.request.type === "IntentRequest"
        && handlerInput.requestEnvelope.request.intent.name === "FeelingIntent";
  },
  handle(handlerInput: HandlerInput): Response {
    const request = handlerInput.requestEnvelope.request as IntentRequest;
    const slot = request.intent.slots && request.intent.slots.feeling as Slot;
    const feelingId = slot.resolutions.resolutionsPerAuthority[0].values[0].value.id;

    let speech: string;
    const reprompt: string = new Speech().say("今日の気分を教えてください").ssml();
    switch (feelingId) {
      case "0":
        speech = new Speech().say("まあ、元気だして。くよくよせずに行きましょう。").ssml();
        break;
      case "3":
        speech = new Speech().say("気分上げていきましょ。").ssml();
        break;
      case "5":
        speech = new Speech().say("いつもどおりで行きましょう。").ssml();
        break;
      case "6":
        speech = new Speech().say("なんかいいことありそうですね！").ssml();
      case "8":
        speech = new Speech().say("そんなときは思い切って行動しましょう。").ssml();
      case "10":
        speech = new Speech().emphasis("strong", "素晴らしい!").say("張り切っていきましょう！").ssml();
        break;
      default:
        speech = reprompt;
        break;
    }

    return handlerInput.responseBuilder
      .speak(speech)
      .reprompt(reprompt)
      .getResponse();
  },
};

export default FeelingIntentHandler;
