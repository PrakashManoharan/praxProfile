export const summary = (profile, listItems) => {
  return {
    type: 'LOAD_SUMMARY',
    payload: {
      profile: profile,
      listItems: [listItems]
    }
  }
}

export const skills = (skills, skillsummaries, tabHeaders, webLanguages, preProcessors, webTechnologies, serverSide, database, tools) => {
  return{
    type: "LOAD_SKILLS",
    payload: {
      skills: skills,
      skillsummaries: [skillsummaries],
      tabHeaders: [tabHeaders],
      webLanguages:[webLanguages], preProcessors:[preProcessors], webTechnologies:[webTechnologies], serverSide:[serverSide],
      database:[database],
      tools:[tools]
    }
  }
}

