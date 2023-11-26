interface Props {
  text: string;
}

export const UseTextToAudio = ({ text }: Props) => {
  const speakOut = () => {
    if (text === null || text === '') return;
    else {
      text = text.toString();
      let textString = text.replace(/(<([^>]+)>)/gi, '');
      let utterance = new SpeechSynthesisUtterance();
      utterance.text = textString;
      utterance.volume = 1;
      utterance.voice = window.speechSynthesis.getVoices()[1];
      window.speechSynthesis.speak(utterance);
    }
  };

  return { speakOut };
};
