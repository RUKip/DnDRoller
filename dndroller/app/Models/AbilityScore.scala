package Models

object AbilityDefault {
  val DefaultAbilityScore = 10
}

class AbilityScore(
  strength: Int = AbilityDefault.DefaultAbilityScore,
  dexterity: Int = AbilityDefault.DefaultAbilityScore,
  constitution: Int = AbilityDefault.DefaultAbilityScore,
  intelligence: Int = AbilityDefault.DefaultAbilityScore,
  wisdom: Int = AbilityDefault.DefaultAbilityScore,
  charisma: Int = AbilityDefault.DefaultAbilityScore
) {
}
