package Models

class Hero {

  private var _stats: AbilityScore = new AbilityScore

  private var _name: String = ""

  def stats: AbilityScore = _stats
  def stats_= (newValue: AbilityScore): Unit = {
    if (newValue != null) _stats = newValue else printWarning()
  }

  def name: String = _name

  private def printWarning(): Unit = println("Ability score cannot be null")
}
