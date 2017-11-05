import Mentors from "../Mentors";
import Mentees from "../Mentees";

export default function matcher(arg) {
  const request = Object.assign({}, arg);
  let results = [];
  if (request.role === "Mentor") {
    for (let i = 0; i < Mentors.length; i++) {
      const mentor = Object.assign({}, Mentors[i]);
      mentor.score = 0;
      if (request.career === mentor.career) {
        mentor.score += 15;
      }
      if (request.personality === mentor.personality) {
        mentor.score += 10;
      }
      if (request.hobby === mentor.hobby) {
        mentor.score += 5;
      }
      results.push(mentor);
    }
  } else {
    for (let i = 0; i < Mentees.length; i++) {
      const mentee = Object.assign({}, Mentees[i]);
      mentee.score = 0;
      if (request.career === mentee.major) {
        mentee.score += 15;
      }
      if (request.personality === mentee.personality) {
        mentee.score += 10;
      }
      if (request.hobby === mentee.hobby) {
        mentee.score += 5;
      }
      results.push(mentee);
    }
  }
  results = results.sort((a, b) => {
    return b.score - a.score;
  });
  while (results.length > 3) {
    results.pop();
  }
  return results;
}
