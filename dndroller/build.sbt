name := """dndroller"""
organization := "ruben"

version := "1.0-SNAPSHOT"

lazy val root = (project in file(".")).enablePlugins(PlayScala)

scalaVersion := "2.13.2"

libraryDependencies += guice
libraryDependencies += "org.scalatestplus.play" %% "scalatestplus-play" % "5.0.0" % Test

scalacOptions in Universal ++= Seq(
  "-Dpidfile.path=/dev/null"
)

// Adds additional packages into Twirl
//TwirlKeys.templateImports += "ruben.controllers._"

// Adds additional packages into conf/routes
// play.sbt.routes.RoutesKeys.routesImport += "ruben.binders._"
