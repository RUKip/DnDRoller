package Database

import Models.Hero
import org.mongodb.scala.{Completed, Document, MongoClient, MongoCollection, MongoDatabase}
import play.api.Configuration
import com.google.gson.Gson

import scala.concurrent.Future

class DatabaseHandler(config: Configuration) {

  val mongoClient : MongoClient = MongoClient(config.get[String]("mongodb_client_location"))
  val database : MongoDatabase = mongoClient.getDatabase(config.get[String]("mongodb_dndroller_database"))

  def addHero(hero: Hero): Future[Completed] = {
    val heroes_collection : MongoCollection[Document] = database.getCollection(config.get[String]("mongodb_heroes_collection"))
    val gson = new Gson
    val document: Document = Document(gson.toJson(hero))
    heroes_collection.insertOne(document).toFuture()
  }
}
