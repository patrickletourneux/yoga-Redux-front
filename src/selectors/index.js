/* eslint-disable max-len */
/* eslint-disable import/prefer-default-export */

// Selectors
// des fonctions qui prennent en paramètre le state.positions. ou une partie du state.positions.
// et elle renvoie des données dérivées de ce state.positions.

/**
 * fonction qui retourne les positions filtrées par le searchText du state.positions.
 * @returns filteredPositions without Double value
 */
export function selectFilteredPositionsBySearchText() {
  return (state) => {
    let filteredPositionsSanskritEnglishwithoutDouble = state.positions.allPositions;
    if (state.positions.searchText !== '') {
      const filteredPositionsSanskrit = state.positions.allPositions.filter((item) => item.sanskrit_name.toLowerCase().includes(state.positions.searchText.toLowerCase()));
      const filteredPositionsEnglish = state.positions.allPositions.filter((item) => item.english_name.toLowerCase().includes(state.positions.searchText.toLowerCase()));
      const filteredPositionsSanskritEnglish = [...filteredPositionsSanskrit, ...filteredPositionsEnglish];
      filteredPositionsSanskritEnglishwithoutDouble = [...new Set(filteredPositionsSanskritEnglish)];
    }
    return filteredPositionsSanskritEnglishwithoutDouble;
  };
}
export function findPositionById(id) {
  return (state) => {
    const AllPositions = state.positions.allPositions;
    const position = AllPositions.find((item) => item.id === id);
    return position;
  };
}
