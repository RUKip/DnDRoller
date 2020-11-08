package Models

import play.api.libs.json.{JsPath, Reads}
import play.api.libs.functional.syntax._

object Hero {
  implicit val heroReader: Reads[Hero] = (
    (JsPath \ "name").read[String] and
      (JsPath \ "race").read[String] and
      (JsPath \ "max_hp").read[Int] and
      (JsPath \ "stats").read[AbilityScore]
    )(Hero.apply _)
}

case class Hero (
  name: String,
  race: String,
  max_hp: Int,
  ability_score: AbilityScore
) {
}
