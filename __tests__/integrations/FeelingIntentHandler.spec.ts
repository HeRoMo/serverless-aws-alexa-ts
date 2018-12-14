import {SkillResponse, VirtualAlexa} from "virtual-alexa";
import { handler } from "../../index";

const alexa = VirtualAlexa.Builder()
  .handler(handler)
  .interactionModelFile("./interaction_models/model_ja-JP.json")
  .create();

describe("FeelingIntent", () => {
  it ("よくわかんない", async () => {
    const response = await alexa.utter("よくわかんない") as SkillResponse;
    const outputSpeech = response.response.outputSpeech.ssml;
    expect(outputSpeech).toContain("そんな日もありますよね");
  });

  it ("気分は絶好調", async () => {
    const response = await alexa.intend("FeelingIntent", { feeling: "絶好調"}) as SkillResponse;
    const outputSpeech = response.response.outputSpeech.ssml;
    expect(outputSpeech).toContain("素晴らしい!");
  });

  it ("気分は最悪", async () => {
    const response = await alexa.intend("FeelingIntent", { feeling: "最悪"}) as SkillResponse;
    const outputSpeech = response.response.outputSpeech.ssml;
    expect(outputSpeech).toContain("元気だして。");
  });

  it ("気分はイマイチ", async () => {
    const response = await alexa.intend("FeelingIntent", { feeling: "イマイチ"}) as SkillResponse;
    const outputSpeech = response.response.outputSpeech.ssml;
    expect(outputSpeech).toContain("今日の気分を教えてください");
  });
});
