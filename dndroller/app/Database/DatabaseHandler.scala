package Database

import Models.{Hero, Party}
import com.google.gson.Gson
import javax.inject.Inject
import org.mongodb.scala.model.{Filters, UpdateOptions}
import org.mongodb.scala.result.UpdateResult
import org.mongodb.scala.{Completed, Document, MongoClient, MongoCollection, MongoDatabase}
import play.api.Configuration

class DatabaseHandler @Inject() (config: Configuration) {

  val mongoClient : MongoClient = MongoClient(config.get[String]("mongodb_client_location"))
  val database : MongoDatabase = mongoClient.getDatabase(config.get[String]("mongodb_dndroller_database"))

  def updateHero(hero: Hero): Unit = {
    val heroes_collection : MongoCollection[Document] = database.getCollection(config.get[String]("mongodb_heroes_collection"))
    val gson = new Gson
    val document: Document = Document(gson.toJson(hero))
    heroes_collection.updateOne(
      Filters.eq("name", hero.name),
      document,
      (new UpdateOptions()).upsert(true)
    ).subscribe((updateResult: UpdateResult) =>
      if (updateResult.wasAcknowledged) {
        Completed()
      } else {
        throw new Exception("Failed updating hero")
      }
    )
  }

  def updateParty(party: Party): Unit = {
    val parties_collection : MongoCollection[Document] = database.getCollection(config.get[String]("mongodb_party_collection"))
    val gson = new Gson
    val document: Document = Document(gson.toJson(party))
    parties_collection.updateOne(
      Filters.eq("name", party.getName()),
      document,
      (new UpdateOptions()).upsert(true)
    ).subscribe((updateResult: UpdateResult) =>
          if (updateResult.wasAcknowledged) {
            Completed()
          } else {
            throw new Exception("Failed updating party")
          }
    )
  }
}
