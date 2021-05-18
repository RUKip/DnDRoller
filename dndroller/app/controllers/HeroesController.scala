package controllers

import Database.DatabaseHandler
import Models.Hero
import akka.actor.ActorSystem
import akka.stream.Materializer
import javax.inject._
import play.api.libs.json._
import play.api.mvc._

import scala.concurrent.ExecutionContext.Implicits.global
import scala.concurrent.Future

/**
 * This controller Handles Parties, loading and saving parties
 */
@Singleton
class HeroesController @Inject()(val cc: ControllerComponents, val databaseHandler: DatabaseHandler)(implicit system: ActorSystem, mat: Materializer) extends AbstractController(cc) {

  /**
   * Indexes all possible Parties available
   */
  def index(): Action[AnyContent] = Action.async { implicit request: Request[AnyContent] =>
    Future {
      databaseHandler.getAllParties()
    }
  }

  def saveParty(): Action[AnyContent] = Action.async { implicit request: Request[AnyContent] =>
    Future {
      request.body.asJson.map { json =>
        val name_reads: Reads[String] = (JsPath \ "party_name").read[String]
        val party_name: JsResult[String] = json.validate[String](name_reads)

        party_name match {
          case s: JsSuccess[String] => {
            val heroes_reads: Reads[List[Hero]] = (JsPath \ "heroes").read[List[Hero]]
            val heroes = json.validate[List[Hero]](heroes_reads)
            heroes match {
              case success: JsSuccess[List[Hero]] =>
                success.value.foreach(hero => databaseHandler.updateHero(hero))
                Ok(s.value)
              case error: JsError => BadRequest(error.errors.toString())
            }
          }
          case e: JsError => BadRequest(e.errors.toString())
        }
      }.getOrElse {
        BadRequest("Expecting Json data")
      }
    }
  }

  def saveRandomHero(): Action[AnyContent] = Action.async { implicit request: Request[AnyContent] =>
    Future {
      databaseHandler.randomInsert()
      Ok("Success")
    }
  }

  def loadParty(party_name: String): Action[AnyContent]
}
