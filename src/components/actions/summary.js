export const summary = (profile, listItems) => {
  return {
    type: 'LOAD_SUMMARY',
    payload: {
      profile: profile,
      listItems: [listItems]
    }
  }
}

