export const formatData = (data) => {
  const formattedData = {
    quizzes: data?.quizzes?.map((item) => ({
      question: item.question,
      text1: item.choices[0].text,
      text2: item.choices[1].text,
      text3: item.choices[2].text,
      text4: item.choices[3].text,
      valid: item.choices.find((choice) => choice.valid === true).text,
    })),
  };
  return formattedData;
};
