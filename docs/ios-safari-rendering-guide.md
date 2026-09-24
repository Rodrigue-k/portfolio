# Guide & Retours d'Expérience : Prévention des Rectangles Noirs et Bogues de Rendu GPU sur iOS Safari (WebKit)

Ce document capitalise sur la résolution complète des bogues de pavés/rectangles noirs observés sur iPhone (Safari et Chrome sous iOS) sur les projets **Malfakassa** et **Portfolio**.

---

## 1. Symptômes Observés
- Un pavé ou rectangle noir opaque (`#000000`) apparaît autour d'un logo ou dans le coin supérieur gauche à l'origine `(0, 0)` du viewport.
- Le problème est visible exclusivement sur iOS (iPhone / iPad), jamais sur macOS Desktop, Android ou Windows.
- Le problème persiste en navigation privée et affecte les éléments avec fond transparent superposés (`position: fixed` ou `position: sticky`).

---

## 2. Anatomie Technique des Causes

| Cause Racine | Mécanisme sous iOS WebKit | Solution |
| :--- | :--- | :--- |
| **Filtres GPU `blur` avec débordement** | Les `filter: blur(...)` / `blur-2xl` avec des coordonnées négatives (`-left-*`, `-top-*`) provoquent une corruption de surface Metal projetée à l'origine `(0, 0)` du viewport. | Remplacer les filtres par des dégradés radiaux purs CSS (`radial-gradient(...)`). |
| **Canevas racine mal configuré** | `className="dark"` sur `<html>` sans fond explicite force la couleur d'effacement (*clear color*) du GPU en noir pur (`#000000`). | Définir `background-color: var(--bg)` et `color-scheme: light/dark` sur `<html>`. |
| **Conteneurs `fixed`/`sticky` transparents** | WebKit échoue à composer le canal alpha d'un conteneur `fixed` transparent flottant au-dessus d'un `<main>` intermédiaire. | Éviter les `bg-background` superflus sur `<main>`, laisser `body` et `html` peindre le fond. |
| **Transformations sur éléments `inline`** | Appliquer `transform: scale()` ou `transition-all` sur une balise `<a>` inline crée un calcul de bounding box invalide. | Déclarer `inline-flex` ou `inline-block` sur tout élément recevant une transformation. |

---

## 3. Remplacement des Orbes de Flou (Anti-Bogue Garanti)

### ❌ Mauvaise pratique (Déclenche le bogue à l'origine (0, 0))
```html
<div class="pointer-events-none absolute -left-16 -top-16 size-40 rounded-full bg-[#c0461c]/10 blur-2xl" />
<div class="pointer-events-none absolute -bottom-20 -right-16 size-44 rounded-full bg-[#263b32]/10 blur-2xl" />
```

### ✅ Bonne pratique (Zéro allocation de surface de filtre, rendu identique)
```html
<div class="pointer-events-none absolute -left-16 -top-16 size-40 rounded-full bg-[radial-gradient(circle,rgba(192,70,28,0.18)_0%,transparent_70%)]" />
<div class="pointer-events-none absolute -bottom-20 -right-16 size-44 rounded-full bg-[radial-gradient(circle,rgba(38,59,50,0.18)_0%,transparent_70%)]" />
```

---

## 4. Configuration Recommandée pour le Header & Layout

```css
/* globals.css */
html {
  scroll-behavior: smooth;
  color-scheme: light;
  background-color: var(--bg);
}

body {
  background-color: var(--bg);
  color: var(--text);
  font-family: var(--font-body);
  -webkit-font-smoothing: antialiased;
}
```

```tsx
/* Header.tsx */
<header className="pointer-events-none fixed inset-x-0 top-0 z-40">
  <div className={cn(
    "mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-6 transition-[padding] duration-700 ease-out",
    scrolled && "py-4"
  )}>
    <a
      href={`/${locale}`}
      className={cn(
        "pointer-events-auto inline-flex items-center font-display text-xl font-semibold tracking-[-0.06em] text-foreground transition-[transform,opacity] duration-700 ease-[cubic-bezier(.22,1,.36,1)] hover:scale-105",
        scrolled && "pointer-events-none translate-x-14 scale-90 opacity-0"
      )}
    >
      RK<span className="text-[var(--accent-gold)]">.</span>
    </a>
    {/* ... */}
  </div>
</header>
```
