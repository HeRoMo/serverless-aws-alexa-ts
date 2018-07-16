import {SkillResponse, VirtualAlexa} from "virtual-alexa";
import { handler } from "../../index";

const alexa = VirtualAlexa.Builder()
  .handler(handler)
  .interactionModelFile("./interaction_models/model_ja-JP.json")
  .create();

describe("FeelingIntent", () => {

  it ("気分は絶好調", async () => {
    // const response = await alexa.utter("気分は最低") as SkillResponse;
    const response = await alexa.intend("FeelingIntent", { feeling: "絶好調"}) as SkillResponse;
    const speken = response.response.outputSpeech.ssml;
    expect(speken).toContain("素晴らしい!");
  });
});
