# Portfolio - Développeur Mobile Flutter

Un portfolio professionnel moderne créé avec Next.js 15, TypeScript et Tailwind CSS pour présenter les compétences et projets d'un développeur mobile Flutter.

## 🚀 Technologies Utilisées

- **Framework**: Next.js 15 avec App Router
- **Langage**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icônes**: Lucide React
- **Déploiement**: Vercel (optimisé)

## ✨ Fonctionnalités

- 🎨 Design moderne et responsive
- 🌙 Support du mode sombre
- 📱 Interface optimisée mobile
- ⚡ Animations fluides avec Framer Motion
- 🔍 SEO optimisé
- 🎯 Performance élevée
- 📄 Métadonnées Open Graph et Twitter

## 📁 Structure du Projet

```
portfolio/
├── src/
│   ├── app/
│   │   ├── globals.css          # Styles globaux et Tailwind
│   │   ├── layout.tsx           # Layout principal avec métadonnées
│   │   └── page.tsx             # Page d'accueil
│   └── components/
│       ├── animations.tsx       # Composants d'animation
│       └── ProjectCard.tsx      # Carte de projet animée
├── public/                      # Assets statiques
└── package.json                 # Dépendances
```

## 🛠️ Installation et Développement

### Prérequis

- Node.js 18+
- npm ou yarn

### Installation

1. Clonez le repository :
```bash
git clone https://github.com/rodrigue-k/portfolio.git
cd portfolio
```

2. Installez les dépendances :
```bash
npm install
```

3. Lancez le serveur de développement :
```bash
npm run dev
```

4. Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

### Build de production

```bash
npm run build
npm start
```

## 📋 Scripts Disponibles

- `npm run dev` - Démarre le serveur de développement
- `npm run build` - Génère la version de production
- `npm run start` - Démarre le serveur de production
- `npm run lint` - Lance le linter

## 🎨 Personnalisation

### Couleurs et Thème

Le portfolio utilise un système de couleurs basé sur Tailwind CSS avec des variables CSS personnalisées dans `globals.css`. Vous pouvez modifier :

- Couleurs primaires (bleu/violet)
- Couleurs de fond
- Typographie
- Animations

### Contenu

Modifiez les sections dans `src/app/page.tsx` :

- Informations personnelles
- Compétences et technologies
- Projets (ajoutez vos propres projets)
- Informations de contact

### Métadonnées SEO

Mettez à jour les métadonnées dans `src/app/layout.tsx` :

- Titre et description
- Mots-clés
- Open Graph
- Twitter Cards

## 📱 Sections du Portfolio

1. **Hero** - Présentation avec CTA
2. **À propos** - Parcours et statistiques
3. **Compétences** - Technologies organisées par catégories
4. **Projets** - Portfolio avec cartes animées
5. **Contact** - Formulaire et liens de contact
6. **Footer** - Liens et informations légales

## 🚀 Déploiement

### Vercel (Recommandé)

1. Poussez le code sur GitHub
2. Connectez votre repository à Vercel
3. Déployez automatiquement

### Autres plateformes

Le projet peut être déployé sur n'importe quelle plateforme supportant Next.js :

- Netlify
- Railway
- Heroku
- AWS Amplify

## 🔧 Optimisations

- **Performance**: Images optimisées, lazy loading
- **SEO**: Métadonnées complètes, structure sémantique
- **Accessibilité**: ARIA labels, navigation au clavier
- **Mobile-first**: Design responsive
- **Dark mode**: Support natif

## 📞 Contact

Rodrigue KOUDAKPO
- Email: koudakpo.rodrigue@gmail.com
- GitHub: https://github.com/rodrigue-k
- LinkedIn: https://linkedin.com/in/rodrigue-koudakpo

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier LICENSE pour plus de détails.

---

**Construit avec ❤️ par Rodrigue KOUDAKPO**
