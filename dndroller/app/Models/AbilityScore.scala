package Models

import play.api.libs.functional.syntax._
import play.api.libs.json.{JsPath, Reads}

object AbilityScore {
  val DefaultAbilityScore = 10

  implicit val abilityScoreReader: Reads[AbilityScore] = (
    (JsPath \ "str").read[Int] and
      (JsPath \ "dex").read[Int] and
      (JsPath \ "con").read[Int] and
      (JsPath \ "int").read[Int] and
      (JsPath \ "wis").read[Int] and
      (JsPath \ "cha").read[Int]
    )(AbilityScore.apply _)
}

case class AbilityScore(
  str: Int = AbilityScore.DefaultAbilityScore,
  dex: Int = AbilityScore.DefaultAbilityScore,
  con: Int = AbilityScore.DefaultAbilityScore,
  int: Int = AbilityScore.DefaultAbilityScore,
  wis: Int = AbilityScore.DefaultAbilityScore,
  cha: Int = AbilityScore.DefaultAbilityScore
) {
}
