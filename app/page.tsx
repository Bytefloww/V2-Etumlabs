"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import {
  Eye,
  EyeOff,
  Shield,
  Zap,
  Users,
  Calendar,
  ImageIcon,
  Server,
  Mail,
  Github,
  Twitter,
  Youtube,
} from "lucide-react"

export default function HomePage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [loginData, setLoginData] = useState({ id: "", password: "" })
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState("")

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (loginData.id === "etumlabsadmin" && loginData.password === "california") {
      setIsLoggedIn(true)
    } else {
      setError("Identifiants incorrects. Veuillez réessayer.")
    }
  }

  if (isLoggedIn) {
    return <EtumLabsHomepage />
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">E</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                EtumLabs
              </span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                Accueil
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                Événements
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                Galerie
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                Serveurs
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                À propos
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                Contact
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section with Login */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Bienvenue sur{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">EtumLabs</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            La plateforme premium d'événements Minecraft où la créativité rencontre la compétition. Rejoignez notre
            communauté et participez à des aventures épiques sur plusieurs serveurs.
          </p>
        </div>

        {/* Login Card */}
        <div className="max-w-md mx-auto mb-16">
          <Card className="shadow-xl border-0 bg-white/90 backdrop-blur-sm">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold text-gray-900">Connexion</CardTitle>
              <CardDescription>Accédez à la plateforme EtumLabs</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleLogin} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="id">Identifiant</Label>
                  <Input
                    id="id"
                    type="text"
                    placeholder="Entrez votre identifiant"
                    value={loginData.id}
                    onChange={(e) => setLoginData({ ...loginData, id: e.target.value })}
                    className="h-12"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Mot de passe</Label>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Entrez votre mot de passe"
                      value={loginData.password}
                      onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                      className="h-12 pr-10"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                    >
                      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                </div>
                {error && (
                  <Alert className="border-red-200 bg-red-50">
                    <AlertDescription className="text-red-700">{error}</AlertDescription>
                  </Alert>
                )}
                <Button
                  type="submit"
                  className="w-full h-12 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold"
                >
                  Se connecter
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Features Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-6 rounded-2xl bg-white/60 backdrop-blur-sm border border-blue-100">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Communauté d'abord</h3>
            <p className="text-gray-600">
              Créer un environnement accueillant et inclusif où chaque joueur peut s'épanouir et créer des connexions
              durables.
            </p>
          </div>

          <div className="text-center p-6 rounded-2xl bg-white/60 backdrop-blur-sm border border-purple-100">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Excellence créative</h3>
            <p className="text-gray-600">
              Encourager l'innovation et la créativité à travers des événements, des concours et des projets de
              construction collaboratifs.
            </p>
          </div>

          <div className="text-center p-6 rounded-2xl bg-white/60 backdrop-blur-sm border border-green-100">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Jeu équitable</h3>
            <p className="text-gray-600">
              Maintenir un environnement de jeu équitable et transparent avec des règles claires et cohérentes.
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">1,200+</div>
            <div className="text-gray-600">Joueurs actifs</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">150+</div>
            <div className="text-gray-600">Événements organisés</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">5</div>
            <div className="text-gray-600">Serveurs de jeu</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-orange-600 mb-2">99.8%</div>
            <div className="text-gray-600">Disponibilité</div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">E</span>
                </div>
                <span className="text-xl font-bold">EtumLabs</span>
              </div>
              <p className="text-gray-400">
                La plateforme Minecraft premium offrant des expériences communautaires exceptionnelles.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Plateforme</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Serveurs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Événements
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Galerie
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Communauté</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Discord
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Forums
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Compte</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Connexion
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Inscription
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Profil
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 EtumLabs. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

function EtumLabsHomepage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">E</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                EtumLabs
              </span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#accueil" className="text-blue-600 font-medium">
                Accueil
              </a>
              <a href="#evenements" className="text-gray-600 hover:text-blue-600 transition-colors">
                Événements
              </a>
              <a href="#galerie" className="text-gray-600 hover:text-blue-600 transition-colors">
                Galerie
              </a>
              <a href="#serveurs" className="text-gray-600 hover:text-blue-600 transition-colors">
                Serveurs
              </a>
              <a href="#apropos" className="text-gray-600 hover:text-blue-600 transition-colors">
                À propos
              </a>
              <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">
                Contact
              </a>
            </nav>
            <Button
              onClick={() => window.location.reload()}
              variant="outline"
              className="border-red-200 text-red-600 hover:bg-red-50"
            >
              Déconnexion
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="accueil" className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              Bienvenue sur{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                EtumLabs
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed">
              La plateforme premium d'événements Minecraft où la créativité rencontre la compétition. Rejoignez notre
              communauté et participez à des aventures épiques sur plusieurs serveurs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg"
              >
                Rejoindre maintenant
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg bg-transparent"
              >
                Découvrir nos serveurs
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="evenements" className="py-20 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Événements à venir</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Participez à nos événements exclusifs et remportez des prix exceptionnels
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                <Calendar className="w-16 h-16 text-white" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Build Battle Royale</h3>
                <p className="text-gray-600 mb-4">
                  Compétition de construction en temps limité avec des thèmes surprises
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-blue-600 font-medium">15 Janvier 2024</span>
                  <Button size="sm">Participer</Button>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-r from-green-500 to-teal-500 flex items-center justify-center">
                <Zap className="w-16 h-16 text-white" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">PvP Tournament</h3>
                <p className="text-gray-600 mb-4">Tournoi PvP avec brackets éliminatoires et récompenses exclusives</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-green-600 font-medium">22 Janvier 2024</span>
                  <Button size="sm">Participer</Button>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center">
                <Users className="w-16 h-16 text-white" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Community Project</h3>
                <p className="text-gray-600 mb-4">Construction collaborative d'une ville médiévale géante</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-orange-600 font-medium">En cours</span>
                  <Button size="sm">Rejoindre</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="galerie" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Galerie</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez les créations exceptionnelles de notre communauté
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div
                key={i}
                className="aspect-square bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center hover:scale-105 transition-transform cursor-pointer"
              >
                <ImageIcon className="w-12 h-12 text-blue-600" />
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button variant="outline" size="lg">
              Voir toute la galerie
            </Button>
          </div>
        </div>
      </section>

      {/* Servers Section */}
      <section id="serveurs" className="py-20 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nos Serveurs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explorez nos différents univers de jeu, chacun avec ses propres règles et défis
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Créatif", players: "245", status: "En ligne", color: "blue" },
              { name: "Survie", players: "189", status: "En ligne", color: "green" },
              { name: "PvP", players: "156", status: "En ligne", color: "red" },
              { name: "Mini-jeux", players: "203", status: "En ligne", color: "purple" },
              { name: "Roleplay", players: "98", status: "En ligne", color: "orange" },
              { name: "Événements", players: "67", status: "Privé", color: "gray" },
            ].map((server, i) => (
              <Card key={i} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div
                      className={`w-4 h-4 rounded-full ${server.status === "En ligne" ? "bg-green-500" : "bg-gray-400"}`}
                    ></div>
                    <h3 className="text-xl font-bold text-gray-900">{server.name}</h3>
                  </div>
                  <Server className="w-6 h-6 text-gray-400" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Joueurs connectés:</span>
                    <span className="font-medium">{server.players}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Statut:</span>
                    <span
                      className={`font-medium ${server.status === "En ligne" ? "text-green-600" : "text-gray-600"}`}
                    >
                      {server.status}
                    </span>
                  </div>
                </div>
                <Button className="w-full mt-4" disabled={server.status !== "En ligne"}>
                  {server.status === "En ligne" ? "Rejoindre" : "Indisponible"}
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="apropos" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">À propos d'EtumLabs</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                EtumLabs est né de la passion pour Minecraft et de l'envie de créer une communauté où chaque joueur peut
                exprimer sa créativité et participer à des événements exceptionnels.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Depuis notre création, nous avons organisé plus de 150 événements, accueilli plus de 1200 joueurs actifs
                et maintenu 5 serveurs de haute qualité avec une disponibilité de 99.8%.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">1,200+</div>
                  <div className="text-gray-600">Joueurs actifs</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">150+</div>
                  <div className="text-gray-600">Événements</div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8 text-center">
              <div className="w-32 h-32 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-4xl">E</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Notre Mission</h3>
              <p className="text-gray-600">
                Créer la meilleure expérience Minecraft communautaire en combinant créativité, compétition et
                convivialité.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Contactez-nous</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une question ? Une suggestion ? Notre équipe est là pour vous aider
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Email</h3>
              <p className="text-gray-600">contact@etumlabs.com</p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Discord</h3>
              <p className="text-gray-600">discord.gg/etumlabs</p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Server className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Serveur</h3>
              <p className="text-gray-600">play.etumlabs.com</p>
            </Card>
          </div>

          <div className="flex justify-center space-x-6">
            <a
              href="#"
              className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
            >
              <Github className="w-6 h-6 text-white" />
            </a>
            <a
              href="#"
              className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
            >
              <Twitter className="w-6 h-6 text-white" />
            </a>
            <a
              href="#"
              className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
            >
              <Youtube className="w-6 h-6 text-white" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">E</span>
                </div>
                <span className="text-xl font-bold">EtumLabs</span>
              </div>
              <p className="text-gray-400">
                La plateforme Minecraft premium offrant des expériences communautaires exceptionnelles.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Plateforme</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#serveurs" className="hover:text-white transition-colors">
                    Serveurs
                  </a>
                </li>
                <li>
                  <a href="#evenements" className="hover:text-white transition-colors">
                    Événements
                  </a>
                </li>
                <li>
                  <a href="#galerie" className="hover:text-white transition-colors">
                    Galerie
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Communauté</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Discord
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Forums
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Ressources</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Guide débutant
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Règles
                  </a>
                </li>
                <li>
                  <a href="#apropos" className="hover:text-white transition-colors">
                    À propos
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 EtumLabs. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
