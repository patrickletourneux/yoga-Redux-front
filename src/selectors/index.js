/* eslint-disable import/prefer-default-export */

// Selectors
// des fonctions qui prennent en paramètre le state ou une partie du state
// et elle renvoie des données dérivées de ce state

/**
 * fonction qui retourne les positions filtrées par le searchText du state
 * @returns filteredPositions without Double value
 */
export function selectFilteredPositions () {
  return (state ) => {
    let filteredPositionsSanskritEnglishwithoutDouble = state.allPositions
    if (state.searchText !==""){  
      const filteredPositionsSanskrit = state.allPositions.filter((item) => {
        return item.sanskrit_name.toLowerCase().includes(state.searchText.toLowerCase())
      });
      const filteredPositionsEnglish = state.allPositions.filter((item) => {
        return item.english_name.toLowerCase().includes(state.searchText.toLowerCase())
      });
      const filteredPositionsSanskritEnglish = [...filteredPositionsSanskrit,...filteredPositionsEnglish];
      filteredPositionsSanskritEnglishwithoutDouble = [...new Set(filteredPositionsSanskritEnglish)]
    }
    return filteredPositionsSanskritEnglishwithoutDouble
  }
}
