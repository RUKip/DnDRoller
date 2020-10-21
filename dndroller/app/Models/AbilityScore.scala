package Models

import play.api.libs.functional.syntax._
import play.api.libs.json.{JsPath, Reads}

object AbilityScore {
  val DefaultAbilityScore = 10

  implicit val abilityScoreReader: Reads[AbilityScore] = (
    (JsPath \ "strength").read[Int] and
      (JsPath \ "dexterity").read[Int] and
      (JsPath \ "constitution").read[Int] and
      (JsPath \ "intelligence").read[Int] and
      (JsPath \ "wisdom").read[Int] and
      (JsPath \ "charisma").read[Int]
    )(AbilityScore.apply _)
}

case class AbilityScore(
  strength: Int = AbilityScore.DefaultAbilityScore,
  dexterity: Int = AbilityScore.DefaultAbilityScore,
  constitution: Int = AbilityScore.DefaultAbilityScore,
  intelligence: Int = AbilityScore.DefaultAbilityScore,
  wisdom: Int = AbilityScore.DefaultAbilityScore,
  charisma: Int = AbilityScore.DefaultAbilityScore
) {
}
