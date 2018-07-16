// https://github.com/mandnyc/ssml-builder

interface SpeechObject {
  readonly type: 'SSML';
  speech: string;
}

declare module 'ssml-builder' {
  class Speech {
    constructor();
    say(saying: string): this;
    paragraph(paragraph: string): this;
    sentence(saying: string): this;
    pause(duration: string): this;
    pauseByStrength(strength: 'none'|'x-weak'|'weak'|'medium'|'strong'|'x-strong'): this;
    audio(url: string, callback?: Function): this;
    spell(word: string): this;
    spellSlowly(word: string, delay: string): this;
    toObject(): SpeechObject;
    ssml(excludeSpeakTag?: boolean): string;
    sayAs(
      options: {
        word: string,
        interpret?: 'characters'|'spell-out'|'cardinal'|'number'|'ordinal'|'digits'|'fraction'|'unit'|'date'|'time'|'telephone'|'address'|'interjection'|'expletive',
        format?: string
      }): this;
    partOfSpeech(options: { word: string, role?: string }): this;
    phoneme(alphabet: string, ph: string, word: string): this;
    emphasis(level: 'strong'|'moderate'|'reduced', word: string): this;
    prosody(
      attributes: {
        rate?: 'x-slow'|'slow'|'medium'|'fast'|'x-fast',
        pitch?: 'x-low'|'low'|'medium'|'high'|'x-high',
        volume?: 'silent'|'x-soft'|'soft'|'medium'|'loud'|'x-loud' },
        word: string): this;
    sub(alias: string, word: string): this;
    sayWithSSML(saying: string): this;
    sayRandomChoice(choices: string[]): this;
  }
  namespace Speech {}
  export = Speech;
}

declare module 'ssml-builder/amazon_speech' {
  import * as Speech from 'ssml-builder';
  class AmazonSpeech extends Speech {
    whisper(word: string): this;
  }
  namespace AmazonSpeech {}
  export = AmazonSpeech;
}
