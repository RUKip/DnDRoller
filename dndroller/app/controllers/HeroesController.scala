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
 * This controller creates an `Action` to handle HTTP requests to the
 * application's home page.
 */
@Singleton
class HeroesController @Inject()(cc: ControllerComponents, val databaseHandler: DatabaseHandler)(implicit system: ActorSystem, mat: Materializer) extends AbstractController(cc) {

  /**
   * Create an Action to render an HTML page.
   *
   * The configuration in the `routes` file means that this method
   * will be called when the application receives a `GET` request with
   * a path of `/`.
   */
  def index(): Action[AnyContent] = Action { implicit request: Request[AnyContent] =>
    Ok(views.html.index())
  }

  def saveParty(): Action[AnyContent] = Action.async { implicit request: Request[AnyContent] =>
    Future {
      request.body.asJson.map { json =>
        val party_name = (json \ "party_name").asOpt[String]
        val hero_list = (json \ "heroes").as[JsArray].value.toList
        val heroes = hero_list.map(value => value.as[Hero])
        heroes.foreach(hero => databaseHandler.addHero(hero))
        Ok(party_name)
      }.getOrElse {
        BadRequest("Expecting Json data")
      }
    }
  }

}
