package Models

import scala.collection.mutable

class Party(name: String) {

  var heroes: mutable.Map[String, Hero] = new mutable.HashMap[String, Hero]

  def addHero(hero: Hero): Unit = {
    this.heroes = this.heroes + (hero.name -> hero)
  }

  def removeHero(name: String): Unit = {
    this.heroes = this.heroes - name
  }

  def getName(): String = name
}
