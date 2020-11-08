package Models

import scala.collection.mutable
import scala.collection.mutable.HashMap

class Party {

  var heroes: mutable.Map[String, Hero] = new mutable.HashMap[String, Hero]

  def addHero(hero: Hero): Unit = {
    this.heroes + (hero.name -> hero)
  }

  def removeHero(): Unit = {

  }

  def passiveScore(ability_name: String): Unit ={

  }
}
