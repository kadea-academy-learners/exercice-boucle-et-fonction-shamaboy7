/*
  Énoncé :
  Écris une fonction nommée `multiplication(a, b)` qui retourne le résultat de a * b.

  Signature attendue :
    function multiplication(a, b) -> number

  Placeholder : levée d'erreur pour indiquer que l'exercice doit être implémenté.
*/
function multiplication(a, b) {
  // Vérifier le nombre d'arguments
  if (arguments.length !== 2) return undefined;

  // Vérifier les types
  if (typeof a !== 'number' || typeof b !== 'number') return undefined;
  if (isNaN(a) || isNaN(b)) return undefined;
  const result = a * b;
  return Object.is(result, -0)? 0: result;
}

multiplication(6,7);

// Ne pas modifier la ligne ci-dessous
module.exports = { multiplication }
