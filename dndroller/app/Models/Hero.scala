package Models

import play.api.libs.json.{JsPath, Reads}
import play.api.libs.functional.syntax._

object Hero {
  implicit val heroReader: Reads[Hero] = (
    (JsPath \ "name").read[String] and
      (JsPath \ "ability_score").read[AbilityScore]
    )(Hero.apply _)
}

case class Hero (name: String, ability_score: AbilityScore) {

}

