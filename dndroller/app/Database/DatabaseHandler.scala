package Database

import Models.{AbilityScore, Hero, Party}
import com.google.gson.Gson

import javax.inject.Inject
import org.mongodb.scala.model.{Filters, UpdateOptions}
import org.mongodb.scala.result.UpdateResult
import org.mongodb.scala.{Completed, Document, MongoClient, MongoCollection, MongoDatabase, Observer}
import play.api.Configuration

class DatabaseHandler @Inject() (config: Configuration) {

  val mongoClient : MongoClient = MongoClient(config.get[String]("mongodb_client_location"))
  val database : MongoDatabase = mongoClient.getDatabase(config.get[String]("mongodb_dndroller_database"))

  def randomInsert(): Unit = {
    val heroes_collection : MongoCollection[Document] = database.getCollection(config.get[String]("mongodb_heroes_collection"))
    val gson = new Gson
    val hero: Hero = Hero("randoHero", "random_race", 10, AbilityScore())
    val document: Document = Document(gson.toJson(hero))
    heroes_collection.insertOne(document).subscribe(new Observer[Completed] {
      def onNext(result: Completed): Unit = println(result)
      def onError(e: Throwable): Unit     = println("Failed")
      def onComplete(): Unit              = println("Completed")
    })
  }

  def updateHero(hero: Hero): Unit = {
    val heroes_collection : MongoCollection[Document] = database.getCollection(config.get[String]("mongodb_heroes_collection"))
    val gson = new Gson
    val document: Document = Document("{\"$set\": " + gson.toJson(hero) + "}")
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
    val document: Document = Document("{\"$set\": " + gson.toJson(party) + "}")
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
