import {SkillResponse, VirtualAlexa} from "virtual-alexa";
import {handler} from "../../index";

const alexa = VirtualAlexa.Builder()
  .handler(handler)
  .interactionModelFile("./interaction_models/model_ja-JP.json")
  .create();

describe("launchResponse", async () => {
  it("response launch message", async () => {
    const launchResponse = await alexa.launch();
    const responseSSML = launchResponse.response.outputSpeech.ssml;
    expect(responseSSML).toBe("<speak>Welcome to the Alexa Skills Kit, you can say hello!</speak>");
  });
});

describe("HelloIntentHandler", () => {
  it("response Hello!", async () => {
    const response = await alexa.utter("こんにちは") as SkillResponse;
    const responseSSML = response.response.outputSpeech.ssml;
    expect(responseSSML).toBe("<speak>Hello!</speak>");
  });
});
